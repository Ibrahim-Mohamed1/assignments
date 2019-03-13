const express = require("express")
const app = express()
const port = 3894
const uuid = require("uuid")

app.use(express.json())

const bounty = [
    {
        firstName: "Darth",
        lastName: "Maul",
        isAlive: true,
        amount: "$750,000",
        type: "Sith",
        _id: uuid.v4()
    },
    {
        firstName: "General",
        lastName: "Grievous",
        isAlive: true,
        amount: "$1,000,000",
        type: "Sith",
        _id: uuid.v4()
    },
    {
        firstName: "Darth",
        lastName: "Vader",
        isAlive: true,
        amount: "$10,000,000",
        type: "Sith",
        _id: uuid.v4()
    },
    {
        firstName: "Han",
        lastName: "Solo",
        isAlive: true,
        amount: "$5,000,000",
        type: "Jedi",
        _id: uuid.v4()
    }, {
        firstName: "Luke",
        lastName: "Skywalker",
        isAlive: true,
        amount: "$10,000,000",
        type: "Jedi",
        _id: uuid.v4()
    },
]

app.get('/bounty', (req, res) => {
    res.send(bounty)
})

app.get('/bounty/:_id', (req, res) => {
    const { _id } = req.params
    const found = bounty.find(person => person._id === _id)
    if (found) {
        res.send(found)
    }
    else {
        res.send("Not found sorry!")
    }
})

app.post("/bounty", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid.v4()
    bounty.push(newBounty)
    res.send(bounty)
})

app.put("/bounty/:_id", (req, res) => {
    const updatedBounty = req.body
    let { _id } = req.params
    let found = false
    bounty.forEach(person => {
        if (person._id === _id) {
            person = Object.assign(person, updatedBounty)
            found = true
        }
    });
    if (found) {
        res.send(bounty)
    }
    else {
        res.send("Not found sorry!")
    }
})

app.delete("/bounty/:_id", (req, res) => {
    const { _id } = req.params
    const index = bounty.findIndex(person => person._id === _id)
    bounty.splice(index, 1)
    res.send("Congratulations, bounty has successfully been eliminated!")
})

app.listen(port, () => {
    console.log(`Server is port ${port}`)
})