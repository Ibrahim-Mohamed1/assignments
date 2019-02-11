
var ask = require("readline-sync")

var isAlive = true
var hasWon = false

function Hero (name){
    this.playername = name;
    this.hp = 100;
    this.items = [];
    this.inventory = [];
    this.attack = attack;
}


function Enemy (name, attack, hp){
    this.name = name
    this.attack = attack
    this.hp = hp
}

var cable = new Enemy("Cable", randomLowAttack, 75)
var venom = new Enemy("Venom", randomMedAttack, 100)
var thanos = new Enemy("Thanos", randomHighAttack, 125)

var enemies = [cable, venom, thanos]

var attack = [randomLowAttack, randomMedAttack, randomHighAttack]

var randomLowAttack = Math.floor(Math.floor()*5)+10
var randomMedAttack = Math.floor(Math.floor()*10)+15
var randomHighAttack = Math.floor(Math.floor()*15)+20

var name = ask.question("\nWelcome to Wakanda noble warrior! What is thy name fam? ")
var ready = ask.keyIn("\nHello " + name[0].toUpperCase() + name.slice(1) + "! Is thou ready to start thy quest? [y] Yes, [n] No: ",{limit: "yn"})

var dude = new Hero(name)

function answer(){
    if(ready === "y"){
        console.log("\nSplendid! Let's get started!\n\n" + name[0].toUpperCase() + name.slice(1) + ", thy quest is to rid this beautiful village of any evil that reside! You can do the following. ")
    }else{
        var reason = ask.question("\nHaha how come fam? ")
        console.log('\nWow, "' + reason + '" is not a good enough reason fam haha! So...\n\n' + name[0].toUpperCase() + name.slice(1) + ", thy quest is to rid this beautiful village of any evil that reside! You can do the following. ")
    }
}
answer(ready)

while(isAlive && !hasWon){
    var action = ask.keyIn("\nWhat would you like to do? [w] Walk, [p] Print Inventory, [q] Quit Game: ", {limit: 'wpq'})
    if(action === 'w'){
        walk()
    }
    else if(action === "p"){
        console.log("\nName: " + dude.playername[0].toUpperCase() + dude.playername.slice(1) + "\nHealth: " + dude.hp + "\nInventory: " + dude.inventory)
    }else if(action === "q"){
        console.log("\nThanks for playing " + name[0].toUpperCase() + name.slice(1) + "!\n")
        break
    }
}

function walk(){
    var chances = Math.floor(Math.random()*4)
    if (chances === 1){
        encounter()
    }else {
        joke()
    }
}
function joke(){
    var incident = Math.floor(Math.random()*4)
    if(incident === 0){
    console.log("\nLol, a llama spat on you fam.")
    }else if(incident === 1){
        console.log("\nBruh, you tripped on a pebble. How embarrassing "  + name[0].toUpperCase() + name.slice(1) + "!")
    }else if(incident === 2){
        console.log("\nWhoa, that stray arrow was so close to you skull! Impressive reflexes " + name[0].toUpperCase() + name.slice(1) + "!")
    }else if(incident === 3){
        console.log("\nJesus christ, " + name[0].toUpperCase() + name.slice(1) + "! You almost ran into that gentlemen!")
    }
}

function encounter(){
    console.log("\nOh no! An enemy has been spotted!")
    var choice = ask.keyIn("\nWhat would you like to do? [r] Run or [f] Fight? ",{limit: "rf"})
    if (choice === "r"){
        run()
    }else{
        enemySelect()
        fight()
    }
}

function fight(){
    console.log("\nYour opponents name is " + enemySelect())

}

function run(){
    var chance = Math.floor(Math.random()*2)
    if (chance === 1){
        console.log("\nThat was a close one " + name[0].toUpperCase() + name.slice(1) + "! You're quick on your feet!")
    }else{
        console.log("\nOh no, it's too late! You weren't quick enough " + name[0].toUpperCase() + name.slice(1) + "!")
        fight()
    }
}

function enemySelect(){
    var enemy = Math.floor(Math.random()*enemies.length)
    return enemies[enemy].name
}