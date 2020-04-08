/* 
  ** Handles form submission and data fetch request routes
*/

const router  = require('express').Router();
const Project = require('../models/project-model');

router.post('/api/v1/submit', (req,res) => {
    //use body parser, get the data, validate, store data, send response
    new Project({
        email: 'demo@example.com',
        noOfProjects: '1',
        testers: [{'name':'shan','values':[2,3,4,5,5]}]
    }).save().then(project => {
        console.log('new project created')
        res.status(200).send('Submitted successfully!')
    })
})

module.exports = router;