var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200){
        var data = JSON.parse(xhr.responseText)
        console.log(data)
    } 
};

xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto", true);
xhr.send();


