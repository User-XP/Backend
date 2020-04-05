const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

const keys = require('./keys');
const User = require('../models/user-model')

/* Used to set a token cookie for logged in status */
passport.serializeUser((user,done) => {
    //user.id refers to the id of the object..we use it instead of googleid since some users dont sign in with google
    done(null,user.id);
})

passport.deserializeUser((id,done) => {
    User.findById(id).then((user) => {
        done(null,user);
    });
})

passport.use(new GoogleStrategy({
    //options for google strategy
    callbackURL: '/login/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
 }, (accessToken,refreshToken,profile,done) => {
    //callback from passport strategy
    //check if user has already registered with google
    // console.log(profile)
    User.findOne({googleID: profile.id}).then((currentUser) => {
        if(currentUser){
            //user exists
            console.log("User already exists: " + currentUser);
            done(null,currentUser);
        }else{
            new User({
                name: profile.displayName,
                email: profile._json.email,
                picture: profile._json.picture,
                googleID: profile.id
            }).save().then(newUser => {
                console.log('New User Created:' + newUser);
                done(null,newUser);
            })
        }
    })
      
 })
);

passport.use(new localStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function (email, password, done) {
        User.findOne({
            email: email
        }, async function (err, currentUser) {
            if (err) {
                return done(err);
            }

            if (!currentUser) {
                return done(null, false, {
                    message: 'Incorrect email.'
                });
            }

            if(currentUser.googleID && !currentUser.hasOwnProperty('password')){
                //googleID exists but local password is absent
                return done(null, false, {message: 'Login with you Google ID'});
            }

            if(await bcrypt.compare(password,currentUser.password,function(err, isMatch){
                if(err) throw err;
                if (isMatch) {
                    return done(null, currentUser);
                } else {
                    return done(null, false, {message: 'Invalid password'});
                }
            }))

            return done(null, currentUser);
        })
    }
));