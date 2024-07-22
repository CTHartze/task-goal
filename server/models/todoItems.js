//to create new schema import mongoose
const mongoose = require('mongoose');

//creates schema
const TodoItemSchema = new mongoose.Schema({
    item:{
        type:String,
        required:true
    }
})

//exports schema
module.exports = mongoose.model('todo', TodoItemSchema);