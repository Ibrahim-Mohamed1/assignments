axios.get("https://api.vschool.io/ibrahim/todo").then(function(response) {
    getTodos(response.data)
})

function getTodos(todos){
    todos.forEach(function(todo){
        var parent = document.createElement("data1");
        parent.className = "todo";
        var text = document.createTextNode(todo.title);

        var image = document.createElement("img");
        image.className = "image"
        image.src = todo.imgUrl
        parent.appendChild(image);
        
        var input = document.createElement("input");
        input.className = "input";
        input.type = "checkbox";
        
        parent.appendChild(input);

        parent.appendChild(text);
        
        input.addEventListener("click", function (e){

            e.target.parentNode.classList.toggle("strikened");
            todos.forEach(function (todo){
                todo.completed = todo.completed ? false : true;
            })
        })
        if(todo.completed){
            parent.classList.toggle("strikened")
            input.checked = true;
        }
        document.getElementById("todo-list").appendChild(parent);
    })
 }
