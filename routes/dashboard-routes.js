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

router.get('/projects',authCheck,(req,res) => {
    res.render('./dashboard/project.ejs',{user: req.user}); 
})

router.get('/',authCheck,(req,res) => {
    res.render('./dashboard/index.ejs',{user: req.user});
})

module.exports = router;