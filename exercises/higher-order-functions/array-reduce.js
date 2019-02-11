
// NEW

// var numbers = [1,2,3,4,5,6,7,8,9]

// var total = numbers.reduce(function(fromFirst, toLast){
//     return fromFirst + toLast
// })

// console.log(total)


// NEW


// var numbers = [1,2,3,4,5,6,7,8,9]

// var total = numbers.reduce(function(fromFirst, toLast){
//     return fromFirst.toString() + toLast.toString()
// })

// console.log(total)


// NEW

// voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]

// var votedd = voters.reduce(function(total, voter){
//     voter.voted === true ? total++ : total
//     return total
// },0)

// console.log(votedd)


// NEW


// wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ]

// var cost = wishlist.reduce(function(accumulator, list){
//     return accumulator + list.price
// },0)

// console.log(cost)


// NEW

// var arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ]

// var flatten = arrays.reduce(function(fromFirst, toLast){
//     return fromFirst.concat(toLast)
// })

// console.log(flatten)


// NEW

voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

var voterResults = {
    youthVotes: 0,
    youth: 0,
    midVotes: 0,
    mids: 0,
    oldVotes: 0,
    olds: 0 
}

var votedd = voters.reduce(function(total, voter){
    if(voter.age >= 18 && voter.age <= 25 && voter.voted === true){
        voterResults.youthVotes++
        voterResults.youth++
    }else if(voter.age >= 18 && voter.age <= 25){
        voterResults.youth++
    }else if(voter.age >= 26 && voter.age <= 35 && voter.voted === true){
        voterResults.midVotes++
        voterResults.mids++
    }else if(voter.age >= 26 && voter.age <= 35){
        voterResults.mids++
    }else if(voter.age >= 36 && voter.age <= 55 && voter.voted === true){
        voterResults.oldVotes++
        voterResults.olds++
    }else if(voter.age >= 36 && voter.age <= 55){
        voterResults.olds++
    }
},0)

console.log(voterResults)