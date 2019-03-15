const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema ({
    title: String,
    description: String,
    imageUrl: String
})

module.exports = mongoose.model('todo', todoSchema)