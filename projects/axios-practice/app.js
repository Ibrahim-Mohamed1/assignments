const todoList = document.getElementById('todo-list') 

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
        input.className = "iCheck";
        input.type = "checkbox";
        input.textContent = "Complete"
        input.addEventListener("click", update)

        var inputText = document.createElement('span');
        inputText.appendChild(text)
        parent.appendChild(inputText);

        const deleteButton = document.createElement('button')
        deleteButton.className = 'delete'
        deleteButton.innerHTML = "Delete"
        parent.appendChild(deleteButton)
        
        deleteButton.addEventListener("click", function(e){
            var id = e.target.parentNode.id
            axios.delete(`https://api.vschool.io/ibrahim/todo/${id}`).then(function(){
            deleteButton.remove()
            })
        })

        deleteButton.addEventListener("click", function(e){
            e.target.parentNode.remove(e.target)
            getTodos()
        })

        parent.appendChild(input);
        
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
    
    var img = document.form.image.value
    if(document.form.image.value === ""){
        var random = Math.floor(Math.random()*11)
        console.log(random)
        if(random === 0){
        img = "https://www.rd.com/wp-content/uploads/2018/07/01-Corny-Jokes-Everyone-Will-Laugh-at-nicole-fornabaio-rd.com_-760x506.jpg"
        }
        else if(random === 1){
        img = "https://www.rd.com/wp-content/uploads/2018/09/52-Short-Jokes-Anyone-Can-Remember-nicole-fornabaio-rd.com_.jpg"
        }
        else if(random === 2){
        img = "https://www.readersdigest.ca/wp-content/uploads/sites/14/2018/10/05-Corny-Jokes-Everyone-Will-Laugh-at-nicole-fornabaio-rd.com_-760x506.jpg"
        }
        else if(random === 3){
        img = "https://www.rd.com/wp-content/uploads/2018/06/01-Short-Jokes-Anyone-Can-Remember-nicole-fornabaio-rd.com_-1024x683.jpg"
        }
        else if(random === 4){
        img = "https://www.rd.com/wp-content/uploads/2018/09/73-Short-Jokes-Anyone-Can-Remember-nicole-fornabaio-rd.com_.jpg"
        }
        else if(random === 5){
        img = "https://www.rd.com/wp-content/uploads/2018/06/02-Short-Jokes-Anyone-Can-Remember-nicole-fornabaio-rd.com_-1024x683.jpg"
        }
        else if(random === 6){
        img = "https://www.rd.com/wp-content/uploads/2018/06/04-Short-Jokes-Anyone-Can-Remember-nicole-fornabaio-rd.com_-1024x683.jpg"
        }
        else if(random === 7){
        img = "https://www.rd.com/wp-content/uploads/2018/06/06-Short-Jokes-Anyone-Can-Remember-nicole-fornabaio-rd.com_-1024x683.jpg"
        }
        else if(random === 8){
        img = "https://www.rd.com/wp-content/uploads/2018/06/08-Short-Jokes-Anyone-Can-Remember-nicole-fornabaio-rd.com_-1024x683.jpg"
        }
        else if(random === 9){
        img = "https://www.rd.com/wp-content/uploads/2018/06/11-Short-Jokes-Anyone-Can-Remember-nicole-fornabaio-rd.com_-1024x683.jpg"
        }
        else if(random === 10){
        img = "https://www.rd.com/wp-content/uploads/2018/06/12-Short-Jokes-Anyone-Can-Remember-nicole-fornabaio-rd.com_-1024x683.jpg"
        }
        else{
            img = document.form.image.value
    }}

    newTodo = {
        title: document.form.title.value,
        description: document.form.description.value,
        price: document.form.price.value,
        imgUrl: img,
        completed: document.form.complete.checked
        }

        document.form.title.value = ""
        document.form.description.value = ""
        document.form.price.value = ""
        document.form.image.value = ""
                
    axios.post("https://api.vschool.io/ibrahim/todo", newTodo).then(function(response){
    location.reload();    
    getTodos(response.data)
    }).catch(function(error){console.log(error);
    })
})
