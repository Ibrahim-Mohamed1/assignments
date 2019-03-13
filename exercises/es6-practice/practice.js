// REWRITE TO ES6

const carrots = ["bright orange", "ripe", "rotten"]

const mapVegetables = carrots.map(carrot => ({ type: "carrot", name: carrot}))

console.log(mapVegetables)

// REWRITE TO ES6

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
    //     return arr.filter(function(person) {
        //         return !!person.friendly
        //     })
        // }

// var friendly = people.filter(person => !person.friendly)
        
// console.log(friendly)


// REWRITE TO ES6

// function doMathSum(a, b) {
//     return a + b
// }
    
//     var add = (a,b) => a + b

//     console.log(add(1,8))

// var produceProduct = function(a, b) {
//     return a * b
// }

//     var times = (a,b) => a * b;

//     console.log(times(9,9))


// REWRITE TO ES6

// var printString = (fName, lName, age) => `Hello ${fName} ${lName}! How does it feel to be ${age}!`

// console.log(printString("Ibrahim", "Mohamed", 22))


// REWRITE TO ES6

// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
//  ];
 
//  function filterForDogs(arr) {
//      return arr.filter(animal => {
//          if (animal.type === "dog") {
//              return true
//          } else {
//              return false
//          }
//      })
//  }

//  var filterDogos = animals.filter(dog => dog.type === "dog")

//  console.log(filterDogos)


// REWRITE TO ES6

// var funFunction = (name, location) => `Hello ${name} 

// Welcome to ${location}!

// I hope you enjoy your stay! Please feel free to ask for anything that may come up during your wonderful stay!
// `
// console.log(funFunction("Ibrahim", "Italy"))