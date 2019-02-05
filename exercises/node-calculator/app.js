var ask = require("readline-sync")

var firstNum = ask.question("\nEnter your first number please: ")
var secNum = ask.question("\nEnter your second number please: ")
var operation = ask.question("\nType out what you would like to do: add, sub, mul, or div; ")
function stuff (operation){
    if(operation === "div"){
        return +firstNum / +secNum
    }else if(operation === "add"){
        return +firstNum + +secNum
    }else if(operation === "sub"){
        return +firstNum - +secNum
    }else if(operation === "mul"){
        return +firstNum * +secNum
    }
}

console.log("\nYour result: " + stuff(operation) + "\n")