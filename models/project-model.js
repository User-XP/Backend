const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Project Schema

const projectSchema = new Schema({
    ID: String,
    url: String,
    name: String,
    email: String,
    noOfProjects: String,
    testers: Array
})

const testSchema = new Schema({
    projectID: {type: String, required: true},
    date: String,
    page: String,
    browserWidth: Number,
    browserHeight: Number,
    tester: {
        name: String,
        age: { type: Number, min: 10, max: 90 },
        gender: String
    },
    data: {type: Array, required: true}
})

const Project = mongoose.model('projects', projectSchema);
const Test = mongoose.model('tests', testSchema);

module.exports = {Project, Test};