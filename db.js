/*
*   Todo{
        title: string;
        description: string;
        completed: string;
    }
*
*
*/

const mongoose = required("mongoose")
mongoose.connect("mongodb://localhost:27017")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: String
})

const todo = mongoose.model('todos', todoSchema)
module.exports = {
    todo: todo
}
// mongodb://localhost:27017