const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    picture: String,
    googleID: String
})

const User = mongoose.model('users', userSchema);

module.exports = User