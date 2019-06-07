const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    pseudo: {
        type: String
    },
    profil: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model('users', UserSchema)