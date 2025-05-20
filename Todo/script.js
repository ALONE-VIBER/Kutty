//const todoList = document.querySelector("#todo-list");
const todos = document.querySelectorAll("#todo-list .todo-container");

todos.forEach(function (todoContainer) {

    const content = todoContainer.querySelector(".content");
    const para = content.querySelector("p");
    const editButton = todoContainer.querySelector("button");
    const edit = todoContainer.querySelector(".edit");
    const updatebutton = edit.querySelector("button");
    const input = edit.querySelector("input");
    const checkBox = todoContainer.querySelector(".check-box");

    checkBox.textContent = "☐";    

    todoContainer.addEventListener("click",()=>{
        
        content.classList.toggle("task-accomplished");

        if (content.classList.contains("task-accomplished")) {
            editButton.style.display = "none";
            checkBox.textContent = "☑︎";
        } else {
            editButton.style.display = "inline";
            checkBox.textContent = "☐";
        }
    })

    editButton.addEventListener("click", function () {
        // here the style of .edit class should be change
        edit.style.display = "block";
        input.value = para.textContent;

    })

    updatebutton.addEventListener("click", function () {
        para.textContent = input.value;
        edit.style.display = "none";
    })
})


