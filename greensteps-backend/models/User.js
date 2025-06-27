const mongoose = require('mongoose');

const userdata = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: String,
    password: String,
    joined: {type:Date, default: Date.now}
})

module.exports = mongoose.model('User', userSchema);