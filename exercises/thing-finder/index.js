const express = require('express')
const app = express()
const port = 4534

app.use(express.json())

app.use('/stuff', require("./stuffRoutes"))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})