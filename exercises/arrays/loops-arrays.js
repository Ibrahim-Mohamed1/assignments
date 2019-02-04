
// Array = simply just a list of items

// creating an array: declare variable, put values into brackets with quotations marks for each item separated by comas

var myArr = ['red', 'White', 'Blue']

// Arrays have indexes for each item. This index number starts at 0 for the first item and 1 for the second and so on.

    var myArr = ['red', 'White', 'Blue']
// Index numbers :  0       1        2

// You can add to an array by calling the array name followed in brackets by the index number and item you want to add.

myArr[3] = 'Green'   //==> myArr =  ['red', 'White', 'Blue', 'Green]
        // Index numbers :             0       1        2       3

// And same goes if you want to change an item in your array. Just put the index number you want to change after calling your array. 

myArr[0] = 'Purple'   //==> myArr =  ['Purple', 'White', 'Blue', 'Green']
        //Index numbers :                 0        1        2       3

// Arrays can hold numbers, strings, and functions

function hello(){
    console.log("Hello World!")
}

myArr = ['Purple', 'White', 'Blue', 'Green', 7, hello]

// to call the function you can do it normally or call it as you would with an array

function hello() 
// OR
myArr[5]()

//You can have an array within in an array and which makes it a multidemensional array

myArr = ['Purple', 'White', 'Blue', 'Green', 7, hello, ['Earth', 'mars', 'Jupiter']]

//to call an array within an array you call the array name, index of the demension, and the index of the array you need

myArr[0][1]  //===> Mars

//Useful properties of arrays

myArr.shift() /*===> pulls the first item out of the array.*/ ['White', 'Blue', 'Green', 7, hello, ['Earth', 'mars', 'Jupiter']]

myArr.pop()   /*===> pulls the last item out of the array. */ ['White', 'Blue', 'Green', 7, hello, ['Earth', 'mars']]

// FOR LOOPS are easier ways of counting. They typically start at 0 and your decide how high you want it to count. This is the for loop format

for(var i < 0; i < condition; i++)

// you can change where you want to start counting by changing the 0, change how high or low you want it count by changing the condition, and 
// change how fast or slow you want it to increment/decrement 

// Two main useful properties of for loop are the .length and [i]

.length // Makes your for loop dynamic by going through your entire array length

[i] // makes your for loop dynamic by looping through each item in your array.