

// NEW

// var numbers = [3,37,2,4,6,23,2,4,5,236,6,2,]

// var doubles = numbers.map(function(number){
//     return number * 2
// })

// console.log(doubles)


// NEW

// var numbers = [3,37,2,4,6,23,2,4,5,236,6,2,]

// var str = numbers.map(function(number){
//     return number.toString()
// })

// console.log(str)


// NEW

// var names = ["JoHn", "JaMeS", "DaViD", "ArIeL", "TaTiAnA"]

// var caps = names.map(function(name){
//     return name[0].toUpperCase() + name.slice(1).toLowerCase()
// })

// console.log(caps)


// NEW

// people = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]

// names = people.map(function(person){
//     return person.name
// })

// console.log(names)
    // OR
// function names(){
//     var name = people.map(function(person){
//         return person.name
//     })
//     return name
// }

// console.log(names(people))


// NEW

// people = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]

// function str(){
//     var permission = people.map(function(person){
//         if(person.age <= 18){
//             return person.name + " is under age"
//         }else{
//             return person.name + " can see the Matrix"
//         }
//     })
//     return permission
// }

// console.log(str(people))


// NEW

people = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

function stuff(){
    var printName = people.map(function(person){
        return `<h1>${person.name}</h1>` + `<h2>${person.age}</h1>`
    })
        return printName
}

console.log(stuff(people))