const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 6944

// app.get('/',(request, response)=>{          //get is referring to how we handle recieving a request from a client
//     response.send({sport: "football"})
// }) 

app.use(bodyParser.json())                     // converts java into json

const database = [
    {
        name: "spaghetti",
        type: "pasta",
        sauce: "red",
        id: 2983234
    },
    {
        name: "fettuccine",
        type: "pasta",
        sauce: "alfredo",
        id: 2398423
    },
    {
        name: "lasagana",
        type: "sauce",
        sauce: "marinara",
        id: 45645
    }
]

app.get("/", (req, res) => {
    res.send(database)
})

app.post('/food', (req, res) => {
    console.log(req.body)
    database.push(req.body)
    res.send(data)
})

app.listen(port, () => {                    // port to open server. Do not use 8080(reserved) or 3000(React)
    console.log(`Server is running on ${port}`)
})