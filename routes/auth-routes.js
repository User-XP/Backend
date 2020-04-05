const router  = require('express').Router();
const passport = require('passport');
const bcrypt = require('bcryptjs')
const User = require('../models/user-model')

// Login Page
router.get('/login', (req,res) => {
    if(req.isAuthenticated()){
        //if logged in already
        res.redirect('/dashboard');
    }
    res.render('login.ejs'); 
})

//Login POST REQUEST
router.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true
}), (req, res) => {
    res.send('middleware executed..data recieved ' + req.body.email);
});

//Sign in with Google
router.get('/login/google', passport.authenticate('google',{
    //scope refers to the different data that we need from google
    scope: ['email','profile']
}));

//Sign in with Google REDIRECT
router.get('/login/google/redirect', passport.authenticate('google'), (req,res) => {
    /* passport.autenticate('google') takes the code recieved from google and exchanges it for the profile information */
    res.redirect('/dashboard');
})

//Logout
router.get('/logout', (req,res) => {
    req.logOut();
    res.redirect('/');
});

//Signup
router.get('/signup', (req, res) => {
    if(req.isAuthenticated()){
        //if logged in already
        res.redirect('/dashboard');
    }
	return res.render('signup.ejs');
})

//SignUp Form Submission
/* TO DO
*  Check if the user is already present in the database before inserting
*
*/
router.post('/signup', async function (req, res) {

            User.findOne({
                email: req.body.email
            }, async (err, user) => {
                if (err) {
                    console.log("Error searching db..")
                }

                //user doesn't exists
                if (!user) {

                    try {
                        const hashedPassword = await bcrypt.hash(req.body.password, 10);

                        new User({
                            name: req.body.name,
                            email: req.body.email,
                            password: hashedPassword,
                            companyname: req.body.companyname
                        }).save().then(newUser => {
                            console.log('New User Created:' + newUser);
                        })

                        //redirect to login page
                        res.redirect('/login');

                    } catch (error) {
                        //if signup fails
                        res.render('signup.ejs',{message:'An error occured..try again'});
                    }

                }else{
                    //user already exists
                    console.log("Email already exits")
                    res.render('signup.ejs',{message:'Email ID exists'})
                }
            })
        
});



module.exports = router;