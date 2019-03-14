const express = require("express")
const app = express()
const port = 3894
const bounty = require("./bountyList")
const uuid = require("uuid")

app.use(express.json())

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
    if (Object.keys(req.body).length !== 0) {
        const newBounty = req.body
        newBounty._id = uuid.v4()
        bounty.push(newBounty)
        res.send(newBounty)
    } else {
        res.send('Please enter valid values for new post!')
    }
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