axios.get("https://api.vschool.io/ibrahim/todo").then(function(response) {
    getTodos(response.data)
})

function getTodos(todos){
    todos.forEach(function(todo){
        var parent = document.createElement("data1");
        parent.className = "todo";
        var text = document.createTextNode(todo.title);
        parent.id = todo._id

        var image = document.createElement("img");
        image.className = "image"
        image.src = todo.imgUrl
        parent.appendChild(image);
        
        var input = document.createElement("input");
        input.className = "input";
        input.type = "checkbox";
        input.addEventListener("click", update)
        
        var delete = document.createElement("button")

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

 function update(e){
     if(e.target.checked){
        axios.put("https://api.vschool.io/ibrahim/todo/" + e.target.parentNode.id, {completed: true}).then(function(response){
        })
     }else{
        axios.put("https://api.vschool.io/ibrahim/todo/" + e.target.parentNode.id, {completed: false}).then(function(response){
     })
 }}

 document.form.addEventListener("submit", function(e){
    e.preventDefault()
    newTodo = {
        title: document.form.title.value,
        description: document.form.description.value,
        price: document.form.price.value,
        imgUrl: document.form.image.value,
        completed: document.form.complete.checked
        }
        console.log(newTodo);

    axios.post("https://api.vschool.io/ibrahim/todo", newTodo).then(function(response){
        console.log(response.data);
        getTodos(response.data)
    }).catch(function(error){console.log(error);
    })
})