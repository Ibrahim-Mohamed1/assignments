var ask = require("readline-sync")
var name = ask.question("\nWelcome to Escape Room 69! What is your name? ")
var ready = ask.keyInYN("\nHello " + name[0].toUpperCase() + name.slice(1) + "! Are you ready to start?")
function answer(){
    if(ready){
        return "\nAwesome! Let's get started!"
    }else{
        return "\nHaha too bad fam!"
    }
}
console.log(answer(ready))
var options = ['Put hand in hole', "Find the key",  "Open the door"]
var options2 = ['Put hand in hole', "Open the door"]
var intro = ask.keyInSelect(options, "\nYou are in a dark room and have the following options!")
function choice(intro){
    if(intro === 0){
        console.log("\nYou have died")
        var tryAgain = ask.keyInSelect(options, "\nYou are in a dark room and have the following options!")
        choice(tryAgain)
    }else if (intro === 1){
        console.log("\nCongratulations! You found the key fam!")
        success()
    }else if(intro === 2){
        console.log("\nHaha nice try! The door is looked bruh! ")
        var tryAgain = ask.keyInSelect(options, "\nYou are in a dark room and have the following options!")
        choice(tryAgain)
    }else{
        return "\nPlease input a valid choice! " + intro
    }
}
choice(intro)
function success(){
    var answer2 = ask.keyInSelect(options2, "What would you like to do next?")
    if(answer2 === 0){
        console.log("\nYou have died")
        var tryAgain = ask.keyInSelect(options, "\nYou are in a dark room and have the following options!")
        choice(tryAgain)
    }else if(answer2 === 1){
        console.log("\nWOOOOHOOOOO! FREEEEDOM!!!\n")
    }
}
