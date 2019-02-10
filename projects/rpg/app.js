
var ask = require("readline-sync")

var isAlive = true
var hasWon = false

function Hero(name, hp){
    this.name = name
    // this.weapons = []
    this.attack = Math.floor(Math.random()*30)+11
    this.hp = hp
    this.items = []
    this.isAalive = true
}

var player = new Hero("Mike")

function enemy(name, attack, hp)
{
    this.name = name
    this.attack = attack
    this.hp = hp
}

var randomLow = Math.floor(Math.random()*10)+10
var randomMed = Math.floor(Math.random()*15)+20
var randomHigh = Math.floor(Math.random()*20)+30


var vector = new enemy("Vector ", randomLow, 15)
var samus = new enemy("Samus ", randomMed, 50)
var fox = new enemy("Fox ", randomHigh, 90)

var enemies = [vector, samus, fox]

//intro console.log
console.log("Hey bruh, What's thou name?")

while(isAalive && !hasWon){
    var action = ask.keyIn("What would you like to do? [w} Milly Walk, [p] Print Inventory, [q] Quit Game. ", {limit: "wpq"})
    if(action === 'w')
    }else{
        var enemy = enemySelect()
        while(enemy.hp > 0 && player.hp > 0){
        }
        if(enemy.hp <= 0){
            console.log("you have won you hero")
        }else if(player.hp <= 0){
            console.log("you dead bruh")
            isAlive = false;
        }
    }
}

function walk(){
    var random = Math.floor(Math.random()*3)
    if (random === 1){
        encounter()
    }else {
        console.log('You passed a tree. ')
    }
}

function encounter(){
    var action = ask.keyIn("Would you like to [r] Run or [f] Fight. ", {limit: "rf"})
    if(action === "r"){
        bolt()
    }else{
        fight()
    }
}

function fight(){
    var random = Math.floor(Math.random()*5)
    if(random === 1){
        miss()
    }else{
        var enemy = enemySelect()
        player.hp -= enemy.attack
        enemy.hp -= player.attack
        console.log("hey " + player + " your hp is now " + player )
        console.log("You hit " + enem)
    }
}

function enemySelect(){
    var random = Math.floor(Math.random()*enemies.length)
    return enemies[random]
}

function miss (){
    console.log("lolz you missed dudee")
}
