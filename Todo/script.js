function addAndModifyTodoListFunc(todoContainer) {

    const todo = todoContainer.querySelector(".todo");
    // console.log();
    const content = todoContainer.querySelector(".content");
    // console.log();
    const para = content.querySelector("p");
    // console.log();
    const editButton = todoContainer.querySelector("button");
    // console.log();
    const edit = todoContainer.querySelector(".edit");
    console.log("edit",edit);
    const updatebutton = edit.querySelector("button");
    console.log("updatebutton",updatebutton);
    const input = edit.querySelector("input");
    console.log("input",input);
    const checkBox = todoContainer.querySelector(".check-box");
    console.log("checkBox",checkBox);
    checkBox.textContent = "☐";

    todo.addEventListener("click", () => {

        content.classList.toggle("task-accomplished");

        if (content.classList.contains("task-accomplished")) {
            editButton.style.display = "none";
            checkBox.textContent = "☑︎";
            edit.style.display = "none";

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

}

const todoList = document.querySelector("#todo-list");
const todoContainers = todoList.querySelectorAll(".todo-container");
todoContainers.forEach(addAndModifyTodoListFunc);

function addTodoList(){
    
    const divContainer = document.createElement("div");
    divContainer.className = "todo-container";

    const divTodo = document.createElement("div");
    divTodo.className = "todo";

    const divCheckBox = document.createElement("div");
    divCheckBox.className = "check-box";

    const divContent = document.createElement("div");
    divContent.className = "content";
    
    const userInput = addTodo.querySelector("#new-todo");
    const  p = document.createElement("p");
    p.textContent = userInput.value;

    const editbutton = document.createElement("button");
    editbutton.textContent = "EDIT";

    const divEdit = document.createElement("div");
    divEdit.className = "edit";
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

    addAndModifyTodoListFunc(divContainer);
    
    userInput.value = "";
}


const addTodo = document.querySelector("#add-todo");
const addTodoButton = addTodo.querySelector("button");
addTodoButton.addEventListener("click",addTodoList);
