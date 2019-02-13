
var ask = require("readline-sync")
var sleep = require('sleep')

var isAlive = true
var hasWon = false
var gameEnd = false;

function Hero (name, attack){
    this.playername = name;
    this.hp = 100;
    this.inventory = [];
    this.attack = attack;
}

function Amulets (name) {
    this.name = name;
 }
 var earth = new Amulets('Earth Amulet')
 var water = new Amulets('Water Amulet')
 var fire = new Amulets('Fire Amulet')
 
 var sacredamulets = [water.name, fire.name, earth.name]

function Enemy (name, randomAttack, hp){
    this.name = name
    this.attack = randomAttack
    this.hp = hp
}

var randomLowAttack = Math.floor(Math.random()*10)+5
var randomMedAttack = Math.floor(Math.random()*15)+10
var randomHighAttack = Math.floor(Math.random()*20)+15
var randomLethalAttack = Math.floor(Math.random()*50)+80

var cable = new Enemy("Cable", randomLowAttack, 75)
var venom = new Enemy("Venom", randomMedAttack, 100)
var thanos = new Enemy("Thanos", randomHighAttack, 120)

var enemies = [cable, venom, thanos]

var name = ask.question("\nWelcome to Wakanda noble warrior! What is thy name fam? ")
var ready = ask.keyIn("\nHello " + name[0].toUpperCase() + name.slice(1) + "! Is thou ready to start thy quest? [y] Yes, [n] No: ",{limit: "yn"})

var dude = new Hero(name, randomLethalAttack)

function answer(){
    if(ready === "y"){
        console.log("\nSplendid! Let's get started!\n\n" + name[0].toUpperCase() + name.slice(1) + ", thy quest is to rid this beautiful village of any evil that reside! You can do the following. ")
    }else{
        var reason = ask.question("\nHaha how come fam? ")
        console.log('\nWow, "' + reason + '" is not a good enough reason fam haha! So...\n\n' + name[0].toUpperCase() + name.slice(1) + ", thy quest is to rid this beautiful village of any evil that reside! You can do the following. ")
    }
}
answer(ready)

while(isAlive && gameEnd === false){
    var action = ask.keyIn("\nWhat would you like to do? [w] Walk, [p] Print Inventory, [q] Quit Game: ", {limit: 'wpq'})
    if(action === 'w'){
        walk()
    }
    else if(action === "p"){
        inventory()
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
        var enemy = enemySelect()
        fight(enemy)
    }
}

function fight(enemy){
    console.log("\nYour opponents name is: " + enemy.name.toUpperCase())
    sleep.sleep(1)
    console.log("\nYour HP: " + dude.hp + "\tEnemy HP: " + enemy.hp)
    while(enemy.hp > 0 && dude.hp > 0){
        var random = Math.floor(Math.random()*20)
        if(random === 1){
            miss(enemy)
        }else {
            dude.hp -= enemy.attack
            sleep.sleep(2)
            console.log("\nYou were hit by " + enemy.name + " for " + enemy.attack + " HP")
            sleep.sleep(1)
            console.log("\n" + `Your HP is now ${dude.hp}`)
            enemy.hp -= dude.attack
            sleep.sleep(2)
            if (dude.hp <= 0){
                console.log("\nYou have died!\n")
                gameEnd = true
                break
            } 
            console.log("\nYou hit " + enemy.name + " for " + dude.attack + " HP")
            sleep.sleep(2)
            console.log("\n" + `Your attack against ${enemy.name} has plummeted their HP to ${enemy.hp}`)
        }
        if (enemy.hp <= 0){
            sleep.sleep(2)
            console.log("\nYou won!")
            var index = enemies.indexOf(enemy)
            enemies.splice(index,1)
            var amulet = amuletSelect()
            sleep.sleep(2)
            console.log("\nYou have recieved an award: " + amulet)
            sleep.sleep(2)
            dude.inventory.push(amulet)
            var amindex = sacredamulets.indexOf(amulet)
            sacredamulets.splice(amindex,1)
            if(enemies.length <= 0 && dude.hp >0){
                gameEnd = true;
                sleep.sleep(1)
                console.log("\nInventory: " + dude.inventory)
                sleep.sleep(2)
                console.log(`\nCONGRATULATIONS ${dude.playername[0].toUpperCase() + dude.playername.slice(1)}!! You have successfully protected this village from all evil! \n\nTHANK YOU!!\n`)
            }
        }
        if (dude.hp <= 0){
            console.log("\nYou have died!")
    } 
    }
}

function run(){
    var chance = Math.floor(Math.random()*2)
    if (chance === 1){
        console.log("\nThat was a close one " + name[0].toUpperCase() + name.slice(1) + "! You're quick on your feet!")
    }else{
        console.log("\nOh no, it's too late! You weren't quick enough " + name[0].toUpperCase() + name.slice(1) + "!")
        fight(enemySelect())
    }
}

function enemySelect(){
    var enemy = Math.floor(Math.random()*enemies.length)
    return enemies[enemy]
}

function miss (){
    console.log('\nYou missed your attack')
}

function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}
function amuletSelect() {
    var random = Math.floor(Math.random() * sacredamulets.length)
        return sacredamulets[random]
 }
 function inventory(){
    console.log("\nName: " + dude.playername[0].toUpperCase() + dude.playername.slice(1) + "\nHealth: " + dude.hp + "\nInventory: " + dude.inventory)
 }