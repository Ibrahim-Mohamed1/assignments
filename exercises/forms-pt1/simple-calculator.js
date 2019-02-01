
function addition(e){
    e.preventDefault()
    var num1 = document.getElementById("add1").value 
    var num2 = document.getElementById("add2").value
    var sum = +num1 + +num2
    console.log(sum)
    document.getElementById("result").innerHTML = sum;
}

document.getElementById("addSubmit").addEventListener("click", addition)


function clearAdd1(){
    document.getElementById("add1").value = ""
}

document.getElementById("add1").addEventListener("focus", clearAdd1)

function clearAdd2(){
    document.getElementById("add2").value = ""
}

document.getElementById("add2").addEventListener("focus", clearAdd2)


function subtraction(e){
    e.preventDefault()
    var num1 = document.getElementById("sub1").value 
    var num2 = document.getElementById("sub2").value
    var sum = num1 - num2
    console.log(num1)
    document.getElementById("result").innerHTML = sum;
}

document.getElementById("subSubmit").addEventListener("click", subtraction)

function clearSub1(){
    document.getElementById("sub1").value = ""
}

document.getElementById("sub1").addEventListener("focus", clearSub1)

function clearSub2(){
    document.getElementById("sub2").value = ""
}

document.getElementById("sub2").addEventListener("focus", clearSub2)

function multiply(e){
    e.preventDefault()
    var num1 = document.getElementById("times1").value 
    var num2 = document.getElementById("times2").value
    var sum = +num1 * +num2
    console.log(sum)
    document.getElementById("result").innerHTML = sum;
}

document.getElementById("timesSubmit").addEventListener("click", multiply)

function clearTimes1(){
    document.getElementById("times1").value = ""
}

document.getElementById("times1").addEventListener("focus", clearTimes1)

function clearTimes2(){
    document.getElementById("times2").value = ""
}

document.getElementById("times2").addEventListener("focus", clearTimes2)
