const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Project Schema

const projectSchema = new Schema({
    email: String,
    noOfProjects: String,
    testers: Array,
})

const Project = mongoose.model('projects', projectSchema);

module.exports = Project;