const mongoose = require("mongoose");
const { boolean } = require("zod");
mongoose.connect("mongodb+srv://nikhilchawla9013:Y43eYpI9wt8LxmQY@cluster0.kkeckfk.mongodb.net/todo");
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed:Boolean
});

const todos = mongoose.model('todos', todoSchema);
module.exports = {
    todos
}