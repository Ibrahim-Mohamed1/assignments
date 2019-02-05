function firstName(e){
    event.preventDefault()
    var first = document.getElementById("fName").value
    var last = document.getElementById("lName").value
    var age = document.getElementById("age").value
    var gender = document.form.gender.value
    var destination = document.getElementById("destin")
        destin = destination.options[destination.selectedIndex].value
    var diet = document.getElementsByName("diet")
        var dietStr = ""
        for(var i = 0; i < diet.length; i++){
            if(diet[i].checked){
                dietStr += diet[i].value + " "
        }
    }

    alert(`First name: ${first[0].toUpperCase() + first.slice(1)} \nLast name: ${last[0].toUpperCase() + last.slice(1)} \nAge: ${age} \nGender: ${gender} \nDestination: ${destin} \nDietary Restrictions: ${dietStr}`)
}

console.log(document.form.addEventListener("submit", firstName))