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
        img = "http://thesource.com/wp-content/uploads/2017/11/zendaya.jpg"
        }
        else if(random === 1){
        img = "https://i.ytimg.com/vi/QtgdlDeQdqY/maxresdefault.jpg"
        }
        else if(random === 2){
        img = "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2015/02/zendaya_oscars.jpg"
        }
        else if(random === 3){
        img = "https://assets.vogue.com/photos/593ef9f29d94cb14039a9e42/16:9/pass/09-zendaya-coleman-vogue-july-2017.jpg"
        }
        else if(random === 4){
        img = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/zendaya-met-gala-2018-index-955769210-1525740727.jpg"
        }
        else if(random === 5){
        img = "https://www.billboard.com/files/media/zendaya-2018-june-16-u-billboard-1548.jpg"
        }
        else if(random === 6){
        img = "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2015/04/zendaya.jpg"
        }
        else if(random === 7){
        img = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/zendaya-1503623864.jpg"
        }
        else if(random === 8){
        img = "https://assets.teenvogue.com/photos/5a1eca8bd72d6a04875f00e6/16:9/w_1280,c_limit/zendaya-gender-neutral-clothing-line.jpg"
        }
        else if(random === 9){
        img = "https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F514731%252Fc4dfcd99-854b-4415-bfdb-36c55f0b5556.jpg%252F950x534__filters%253Aquality%252890%2529.jpg?signature=KkFk5ezUyUVTKPP59GSd6evM8UM=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com"
        }
        else if(random === 10){
        img = "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2017/08/zendaya.jpg"
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
