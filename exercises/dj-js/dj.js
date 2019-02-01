
function turnBlue(){
    document.getElementById("circle").style.backgroundColor = 'blue'
}
console.log(document.getElementById("circle").addEventListener("mouseover", turnBlue))

function turnRed(){
    document.getElementById("circle").style.backgroundColor = 'red'
}
console.log(document.getElementById("circle").addEventListener("mousedown", turnRed))

function turnYellow(){
    document.getElementById("circle").style.backgroundColor = 'yellow'
}
console.log(document.getElementById("circle").addEventListener("mouseup", turnYellow))

function turnGreen(){
    document.getElementById("circle").style.backgroundColor = 'green'
}
console.log(document.getElementById("circle").addEventListener("dblclick", turnGreen))

function turnOrange(){
    document.getElementById("circle").style.backgroundColor = 'orange'
}
console.log(document.addEventListener("wheel", turnOrange))

function turnCyan(){
    document.getElementById("circle").style.backgroundColor = 'cyan'
}
console.log(document.getElementById("circle").addEventListener("mouseleave", turnCyan))

function keyPress(event){

    var key = event.keyCode

    if (key === 66){
        document.getElementById("circle").style.backgroundColor = 'blue' 
    }
    if (key === 82){
        document.getElementById("circle").style.backgroundColor = 'red' 
    }
    if (key === 89){
        document.getElementById("circle").style.backgroundColor = 'yellow' 
    }
    if (key === 71){
        document.getElementById("circle").style.backgroundColor = 'green' 
    }
    if (key === 79){
        document.getElementById("circle").style.backgroundColor = 'orange' 
    }
    if (key === 67){
        document.getElementById("circle").style.backgroundColor = 'cyan' 
    }
}
document.addEventListener("keydown", keyPress)