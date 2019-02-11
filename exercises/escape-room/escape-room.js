// var ask = require("readline-sync")
// var name = ask.question("\nWelcome to Escape Room 69! What is your name? ")
// var ready = ask.keyInYN("\nHello " + name[0].toUpperCase() + name.slice(1) + "! Are you ready to start?")
// function answer(){
//     if(ready){
//         return "\nAwesome! Let's get started!"
//     }else{
//         return "\nHaha too bad fam!"
//     }
// }
// console.log(answer(ready))
// var options = ['Put hand in hole', "Find the key",  "Open the door"]
// var options2 = ['Put hand in hole', "Open the door"]
// var intro = ask.keyInSelect(options, "\nYou are in a dark room and have the following options!")
// function choice(intro){
//     if(intro === 0){
//         console.log("\nYou have died")
//         var tryAgain = ask.keyInSelect(options, "\nYou are in a dark room and have the following options!")
//         choice(tryAgain)
//     }else if (intro === 1){
//         console.log("\nCongratulations! You found the key fam!")
//         success()
//     }else if(intro === 2){
//         console.log("\nHaha nice try! The door is looked bruh! ")
//         var tryAgain = ask.keyInSelect(options, "\nYou are in a dark room and have the following options!")
//         choice(tryAgain)
//     }else{
//         return "\nPlease input a valid choice! " + intro
//     }
// }
// choice(intro)
// function success(){
//     var answer2 = ask.keyInSelect(options2, "What would you like to do next?")
//     if(answer2 === 0){
//         console.log("\nYou have died")
//         var tryAgain = ask.keyInSelect(options, "\nYou are in a dark room and have the following options!")
//         choice(tryAgain)
//     }else if(answer2 === 1){
//         console.log("\nWOOOOHOOOOO! FREEEEDOM!!!\n")
//     }
// }

var readline = require('readline-sync')

var isAlive = true;
var hasWon = false;

// Character Creation

function Hero (name){
    this.name = name;
    this.attack = Math.floor(Math.random()*35)+11;
    this.hp = 1000;
    this.items = [];
    this.isAlive = true;
}

var player = new Hero('Big Newt Dawg Man Bro Dude')

function Enemy (name, attack, hp){
    this.name = name;
    this.attack = attack;
    this.hp = hp;
}
var randomLow = Math.floor(Math.random()*10)+10;
var randomMedium = Math.floor(Math.random()*15)+20;

var lexLuthor = new Enemy('Bald', randomLow, 15);
var bungalowBoy = new Enemy('Bouncy', randomMedium, 50);

var enemies = [lexLuthor, bungalowBoy]

// intro console.logs
console.log('hello, it is a game')

while(isAlive && !hasWon){
    var action = readline.keyIn("What would you like to do? [w] Walk, [p] Print Inventory, [q] Quit Game ", {limit: 'wpq'})
    if(action === 'w'){
        walk()
    }
}


function walk (){
    var random = Math.floor(Math.random()*3)
    if (random === 1){
        encounter()
    }else {
        console.log('You passed a pretty tree')
    }
}

function encounter (){
    var action = readline.keyIn("Would you like to [r] Run or [f] Fight? ", {limit: 'rf'})
    if(action === 'r'){
        run()
    }else {
        var enemy = enemySelect()
        while(enemy.hp > 0 && player.hp > 0){
            fight(enemy)
        }
        if(enemy.hp <= 0){
            console.log('good job you killed the enemy')
        }else if(player.hp <= 0){
            console.log('You dead')
            isAlive = false;
        }
    }
}

function fight (enemy){
    var random = Math.floor(Math.random()*5)
    if(random === 1){
        miss()
    }else {
        player.hp -= enemy.attack
        enemy.hp -= player.attack
        console.log(`Hey ${player.name} your hp is now ${player.hp}`)
        console.log(`You hit ${enemy.name} and their hp is ${enemy.hp}`)
    }
}

function enemySelect (){
    var random = Math.floor(Math.random()*enemies.length)
    return enemies[random]
}

function miss (){
    console.log('you missed dawg')
}