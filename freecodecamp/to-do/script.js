let addTask = document.getElementById("add-task");
let taskContainer = document.querySelector(".task-container");
let inputTask = document.getElementById("input-task");
// The appendChild() method appends a node (element) as the last child of an element.
addTask.addEventListener("click",function(e){
    
    let task = document.createElement("div");
    task.classList.add("task");


    let li = document.createElement("li");
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement("button");
    checkButton.innerHTML = `<i class = "fa-solid fa-check"><i>`;
    checkButton.classList.add("checkTask");
    task.appendChild(checkButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;
    deleteButton.classList.add("deleteTask");
    task.appendChild(deleteButton);
    
     if(inputTask.value===""){
        alert("Enter a valid task")
     }
     else{
    taskContainer.appendChild(task);
     }
     inputTask.value = "";

    checkButton.addEventListener("click",function(e){
        li.style.textDecoration = "line-through"
    })
    
    deleteButton.addEventListener("click",(e)=>{
        let target = e.target;
        // console.log(target);
        // console.log(target.parentElement);
        target.parentElement.parentElement.remove();
    });

})
 