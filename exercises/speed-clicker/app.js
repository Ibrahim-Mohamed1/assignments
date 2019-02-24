var counter = localStorage.counting || 0;
var display = document.getElementById("display")

display.textContent = counter;

document.addEventListener("click", function(){
   counter++
   display.textContent = counter;
   localStorage.counting = counter
})
