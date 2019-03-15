const uuid = require('uuid')

module.exports = [
    {
        firstName: "Darth",
        lastName: "Maul",
        isAlive: false,
        reward: "$750,000",
        type: "Sith",
        _id: uuid.v4()
    },
    {
        firstName: "General",
        lastName: "Grievous",
        isAlive: true,
        reward: "$1,000,000",
        type: "Sith",
        _id: uuid.v4()
    },
    {
        firstName: "Han",
        lastName: "Solo",
        isAlive: false,
        reward: "$5,000,000",
        type: "Jedi",
        _id: uuid.v4()
    }, 
    {
        firstName: "Darth",
        lastName: "Vader",
        isAlive: true,
        reward: "$10,000,000",
        type: "Sith",
        _id: uuid.v4()
    },
    {
        firstName: "Luke",
        lastName: "Skywalker",
        isAlive: false,
        reward: "$10,000,000",
        type: "Jedi",
        _id: uuid.v4()
    },
    {
        firstName: "Yoda",
        lastName: "",
        isAlive: true,
        reward: "$50,000,000",
        type: "Jedi",
        _id: uuid.v4()
    },
]