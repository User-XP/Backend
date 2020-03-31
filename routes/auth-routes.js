const router  = require('express').Router();
const passport = require('passport');


// Login Page
router.get('/login', (req,res) => {
    if(req.isAuthenticated()){
        //if logged in already
        res.redirect('/dashboard');
    }
    res.render('login.ejs'); 
})

//Sign in with Google
router.get('/login/google', passport.authenticate('google',{
    //scope refers to the different data that we need from google
    scope: ['email','profile']
}));

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


module.exports = router;