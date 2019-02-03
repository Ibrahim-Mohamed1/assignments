function calculateGoons(e) {
    e.preventDefault()
 var goomba = document.getElementById('goombaData').value;
 var bobomb = document.getElementById('bob-ombData').value;
 var cheepcheep = document.getElementById('cheep-cheepData').value;
 var result = (+goomba*5) + (+bobomb*7) + (+cheepcheep*11)
 document.getElementById("result").innerHTML = ("Reward: " + result  + " Coins!" );
 }

 document.getElementById("submitButton").addEventListener('click', calculateGoons)

function clearGoomba(){
    document.getElementById("goombaData").value = ""
}

document.getElementById("goombaData").addEventListener("click", clearGoomba)

function clearbobomb(){
    document.getElementById("bob-ombData").value = ""
}

document.getElementById("bob-ombData").addEventListener("click", clearbobomb)

function clearCheepcheep(){
    document.getElementById("cheep-cheepData").value = ""
}

document.getElementById("cheep-cheepData").addEventListener("click", clearCheepcheep)

// var bleep = new Audio
// bleep.src = "bleep.mp3"
// function cash (){
//     bleep.play()
// } 
// document.getElementById("submitButton").addEventListener("click", bleep)