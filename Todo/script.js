const todoList = document.querySelector("#todo-list");
const todos = todoList.querySelectorAll(".todo-container");

todos.forEach(function (todoContainer) {

    console.log(todoContainer)
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

const addTodo = document.querySelector("#add-todo");
const addTodoButton = addTodo.querySelector("button");

addTodoButton.addEventListener("click",()=>{

    const divContainer = document.createElement("div");
    divContainer.className = "todo-container";

    const divTodo = document.createElement("div");
    divTodo.className = "todo";

    const divCheckBox = document.createElement("div");
    divCheckBox.className = "check-box";

    const divContent = document.createElement("div");
    divContent.className = "content";
    divContent.textContent = "☐";
    
    const userInput = addTodo.querySelector("#new-todo");
    const  p = document.createElement("p");
    p.textContent = userInput.value;

    const editbutton = document.createElement("button");
    editbutton.textContent = "EDIT";

    const divEdit = document.createElement("div");
    const input = document.createElement("input");
    input.id = "new-todo";
    const updatebutton = document.createElement("button");
    updatebutton.textContent = "UPDATE";

    divContent.appendChild(p);
    divTodo.appendChild(divCheckBox);
    divTodo.appendChild(divContent);
    divContainer.appendChild(divTodo);

    divContainer.appendChild(editbutton);

    divEdit.appendChild(input);
    divEdit.appendChild(updatebutton);
    divContainer.appendChild(divEdit);

    todoList.appendChild(divContainer);

})