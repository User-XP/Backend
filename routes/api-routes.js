/* 
  ** Handles form submission and data fetch request routes
*/

const router  = require('express').Router();
const {Project} = require('../models/project-model');
const {Test} = require('../models/project-model');


router.post('/api/v1/submit', (req,res) => {
    //use body parser, get the data, validate, store data, send response
    const testData = JSON.parse(req.body.userXPTrackingData)
    new Test({
        projectID: testData.projectID,
        date: testData.date,
        page: testData.page,
        browserWidth: testData.browserWidth,
        browserHeight: testData.browserHeight,
        tester: testData.tester,
        data: testData.data
    }).save().then(test => {
        console.log('new test document added successfully')
        res.status(200).send('Submitted successfully!')
    })
})

module.exports = router;