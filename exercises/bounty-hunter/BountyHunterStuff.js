const express = require('express')
const app = express()
const mongoose = require ("mongoose")
const port = 6969

app.use(express.json())

mongoose.connect("mongodbL://localhost:27017/bounties", {useNewUrlParser: true})
    .then(()=> console.log("Connected to MongoDB"))
    .catch(err => console.log(err))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})