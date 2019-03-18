const express = require("express")
const bountyRoute = express.Router()
const Bounty = require('./Bounty')

bountyRoute.route('/')
    .get((req, res) =>{
        Bounty.find((err, bounties) =>{
            if(err) return res.status(500).send(err)
            return res.status(200).send(bounties)
        })
    })
    .post((req, res) => {
        // const newBountyInfo = re.body
        // const newBounty = new Bounty(newBountyInfo)
        const newBounty = new Bounty(req.body)
        newBounty.save(err => {
            err && res.status(500).send(err)
            return res.status(200).send(newBounty)
        })
    })

bountyRoute.route('/:id')
    .put((req, res) => {
        // const {id} = req.params
        const data = req.body
        Bounty.findByIdAndUpdate(
            {_id: req.params.id},
            req.body,
            (err, bounty) => {
                err && res.status(500).send(err)
                return res.status(200).send("Successfully updated!")
            }
        )
    })

    .delete((req, res) => {
        Bounty.findOneAndDelete(
            {_id: req.params.id},
            (err, bounty) => {
                err && res.status(500).send(err)
                return res.status(200).send("Successfully deleted!")
            }
        )
    })

    .get((req, res) => {
        Bounty.findById(
            {_id: req.params.id},
            (err, bounty) => {
                err && res.status(500).send(err)
                return res.status(200).send(bounty)
            }
        )
    })

module.exports = bountyRoute