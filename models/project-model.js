const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Project Schema

const projectSchema = new Schema({
    email: String,
    noOfProjects: String,
    testers: Array,
})
const testSchema = new Schema({
    projectID: String,
    date: String,
    page: String,
    browserWidth: String,
    browserHeight: String,
    tester: Object,
    data: Array
})

const Project = mongoose.model('projects', projectSchema);
const Test = mongoose.model('tests', testSchema);

module.exports = {Project, Test};