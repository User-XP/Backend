const router  = require('express').Router();
const { Project, Test } = require('../models/project-model');

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
router.get('/projects/:id/test/:test_id',authCheck,(req,res) => {
    res.render('./dashboard/report.ejs',{ user: req.user, test_id: req.params.test_id}); 
})

router.get('/projects/:id',authCheck,(req,res) => {
    //TO DO 
    // ONLY FETCH IDS for the corresponding projects
   
    Test.find({
        projectID: req.params.id 
    }, async (err, tests) => {
        if(err){
            console.log(err);
        }
        if (tests.length > 0){
            res.render('./dashboard/project.ejs',{user: req.user, id: req.params.id, test: {status: 'ok', tests: tests}}); 
        }else{
            res.render('./dashboard/project.ejs',{user: req.user, id: req.params.id, test: {status: 'empty'}}); 
        }
    });
   
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