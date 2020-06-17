const router  = require('express').Router();
const { Project } = require('../models/project-model');

const authCheck = (req,res,next) => {
    //req.user is available only when user is logged in
    if(!req.user){
        //not logged in
        res.redirect('/login')
    }else{
        next();
    }
};

router.get('/reports',authCheck,(req,res) => {
    res.render('./dashboard/report.ejs',{user: req.user});
})

router.get('/projects/:id',authCheck,(req,res) => {
    res.render('./dashboard/project.ejs',{user: req.user, id: req.params.id}); 
})

router.get('/',authCheck,(req,res) => {
    Project.find({
        email: req.user.email
    }, async (err, projects) => {
        if (err) {
            console.log("Error searching db..")
        }
        if (projects){
            res.render('./dashboard/index.ejs',{ user: req.user, Projects: projects });
        }
    });

    
})



module.exports = router;