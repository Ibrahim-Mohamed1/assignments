const express = require("express")
const stuffRouter = express.Router()
const stuff = ("./data")

stuffRouter.route('/')
    .get((req, res) => {
        let { type, price } = req.query
        if (type && price) {
            const typeAndCost = stuff.filter(thing => thing.type === type && thing.price === price)
            res.send(typeAndCost)
        } else if (type) {
            const item = stuff.filter(thing => thing.type === type)
            res.send(item)
        } else if (price) {
            const cost = stuff.filter(thing => thing.price <= +price)
            res.send(cost)
        } else {
            res.send(stuff)
        }
    })

module.exports = stuffRouter