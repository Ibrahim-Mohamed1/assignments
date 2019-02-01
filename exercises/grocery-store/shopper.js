var shopper = {
    groceryCart : ["Kiwi", "Apples", "Strawbetty", "Tomatoes", "Pickles", "Bell Peppers"],
    hungry: true,
    funds: "$100.00",
    stuff: function(item){
        console.log("This is what you need: " + item)
    }
}
shopper.stuff("a lot of stuff!")