var ask = require("readline-sync")

var name = ask.question("Hi, what is your name? ")

console.log("\n\nHello " + name.toUpperCase() + "! My name is Borus, pleasure to meet you!" + "\n  WHOA! Your name is " + name.length + " characters long! No cap fam, " + name.length + " is my favorite number haha!")

var background = ask.question("\nTell me a little bit about yourself " + name[0].toUpperCase() + name.slice(1) + "! Like what your dream career is and I'll repeat back to you some of what you say to make sure I heard you right fam: ")

console.log("\nThe last part of what you said was: " + background.slice(background.length/2, background.length))

var half = ask.question("\nGive a number between 0 and " + background.length + ". I want to return some of your response. ")

console.log("\nHere is some of your response: " + background.slice(half, background.length) + ". \n")