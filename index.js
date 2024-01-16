const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express()

app.use(express.json())

//body{
// title: string,
//  description: string,
//}
app.post("/todo", async function(req, res){

    const createPayload = req.body;
    const parsedPayload = createTodo.safeParsed(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description
    })

    res.json({
        msg: "Todo Created"
    })

})

app.get("/todos", async function(req, res){
    const todos = await todo.find({

    })
    res.json({
        todos
    })
    console.log(todos)

})

app.put("/completed", async function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParsed(updatePayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }

    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})

