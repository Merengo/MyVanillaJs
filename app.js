// on adding a task
const addButton = document.querySelector(".add-btn");
addButton.addEventListener('click',function(e){
    e.preventDefault();
    let task = document.querySelector('#task').value;
    let v = document.createElement("li");
    v.innerHTML = task;
    v.className ="collection-item";
    
    // append li to ul
    document.querySelector("ul.collection").appendChild(v);
    // tesk deletion link
    const link = document.createElement("a");
    link.innerHTML = '<i class="fa fa-remove"></i>';
    link.className = "delete-item secondary-content";
    v.appendChild(link);
 
});


// on clearing tasks
const clearButton = document.querySelector(".clear-btn");
clearButton.addEventListener("click",function(){
    document.querySelector("ul.collection").innerHTML="";
});

// on deleting a task
let deleteItem = document.querySelectorAll(".delete-item");
// deleteItem.addEventListener("click",function(e){
    // e.preventDefault();

// });



