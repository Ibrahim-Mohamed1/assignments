const express = require('express')
const app = express()
const port = 9233

app.use(express.json())

const todos = [
    {
        title: "Go Home",
        description: "Drive there",
        imageUrl: "https://www.jurist.org/news/wp-content/uploads/sites/4/2018/10/driving_1540841803.jpg",
        _id: "298324"
    },
    {
        title: "Eat",
        description: "Tacos",
        imageUrl: "https://pinchofyum.com/wp-content/uploads/Chili-Lime-Fish-Tacos-Recipe.jpg",
        _id: "384975"
    },
    {
        title: "Eat",
        description: "Tacos",
        imageUrl: "https://pinchofyum.com/wp-content/uploads/Chili-Lime-Fish-Tacos-Recipe.jpg",
        _id: "384975"
    }
]

app.get("/todo", (req, res) => {
    res.send(todos)
})

app.get('/todo/:_id', (req, res) => {
    const {_id} = req.params
    const found = todos.find(todo => todo._id === _id)
    if (found){
        res.send(found)
    }
    else{
        res.send("Not found sorry!")
    }
})

app.post("/todo", (req, res) => {
    todos.push(req.body)
    res.send(todos)
})

app.put("/todo/:_id", (req, res) => {
    const updatedTodo = req.body
    let {_id} = req.params
    let found = false;
    todos.forEach(todo => {
        if(todo._id === _id){
            todo = Object.assign(todo, updatedTodo)
            found = true
        }
    })
    if(found){
        res.send(todos)
    }else{
        res.send('Not found')
    }
})

app.delete("/todo/:_id", (req, res) => {
    const {_id} = req.params
    const index = todos.findIndex(todo => todo._id === _id)
    todos.splice(index, 1)
    res.send("Item has been deleted successfully mate!")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})