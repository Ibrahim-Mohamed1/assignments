var todo = axios.get('https://api.vschool.io/ibrahim/todo/').then(function (response) {
   console.log(response.data);
   for (i = 0; i < response.data.length; i++) {
       done = response.data[i];
       if (done.completed === true) {
           document.getElementById("div1").innerHTML += `<s><div> complete = ${done.completed} | id = ${done._id} | title = ${done.title} | description = ${done.description} | price = ${done.price}</div></s>`;
       } else
           document.getElementById("div1").innerHTML += `<div> complete = ${done.completed} | id = ${done._id} | title = ${done.title} | description = ${done.description} | price = ${done.price}</div>`;
   }
}).catch(function (error) {
   console.log(error);
})
console.log(todo);