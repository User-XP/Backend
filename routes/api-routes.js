/* 
 ** Handles form submission and data fetch request routes
 */

const router = require('express').Router();
const { Project } = require('../models/project-model');
const { Test } = require('../models/project-model');

// API route to recieve test data
router.post('/api/v1/submit', (req, res) => {
    //use body parser, get the data, validate, store data, send response
    const testData = JSON.parse(req.body.userXPTrackingData)
    new Test({
            projectID: testData.projectID,
            date: testData.date,
            page: testData.page,
            browserWidth: testData.browserWidth,
            browserHeight: testData.browserHeight,
            tester: {
                name: req.body.testerName,
                age: req.body.testerAge,
                gender: req.body.testerSex
            },
            data: testData.data
        }).save()
        .then(test => {
            console.log('new test document added successfully', test)
            res.status(200).send('Submitted successfully!')
        })
        .catch((err) => {
            console.log('recieved invalid data ')
            res.status(400).send('Unsucessful: ' + err.message)
        })
})

// Creating new project
router.post('/api/v1/newProject', (req, res) => {
    const data = req.body.Data;
    console.log(data);
    new Project({
        ID: data.ID,
        url: data.url,
        name: data.name,
        email: req.user.email
    }).save()
    .then(project => {
        console.log('new project added successfully', project)
        res.status(200).send('Submitted successfully!')
    })
    .catch((err) => {
        console.log('recieved invalid data ')
        res.status(400).send('Unsucessful: ' + err.message)
    })
})

module.exports = router;