
// NEW

// var numbers = [1, 3, 5, 2, 90, 20]

// var smallToBig = numbers.sort(function(small, big){
//     return small - big
// })

// console.log(smallToBig)


// NEW

// var numbers = [1, 3, 5, 2, 90, 20]

// var bigToSmall = numbers.sort(function(small, big){
//     return big - small
// })

// console.log(bigToSmall)


// NEW

// var strs = ["dog", "wolf", "by", "family", "eaten"]

// var shortToLong = strs.sort()

// console.log(shortToLong)


// New

var byAge = [
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
]

var youngToOld = byAge.sort(function(young, old){
    return young.age - old.age
})

console.log(youngToOld)