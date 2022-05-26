//Subscriber no singlurar

const mongoose = require('mongoose')

const subscribersSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userChannel: {
        type: String,
        required: true
    },
    userDate: {
        type: Date,
        require: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Subscriber', subscribersSchema)