const router  = require('express').Router();

const authCheck = (req,res,next) => {
    //req.user is available only when user is logged in
    if(!req.user){
        //not logged in
        res.redirect('/login')
    }else{
        next();
    }
};

router.get('/settings',authCheck,(req,res) => {
    res.send('This is the settings page');
})

router.get('/',authCheck,(req,res) => {
    res.render('dashboard.ejs',{user: req.user});
})

module.exports = router;