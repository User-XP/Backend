const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    picture: String,
    googleID: String
})

//specify the collection to be used
const User = mongoose.model('users', userSchema);

module.exports = User;