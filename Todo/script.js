//const todoList = document.querySelector("#todo-list");
const todos = document.querySelectorAll("#todo-list .todo");

todos.forEach(function (todo) {

    const content = todo.querySelector(".content");
    const para = content.querySelector("p");
    const editButton = todo.querySelector("button");
    const edit = todo.querySelector(".edit");
    const updatebutton = edit.querySelector("button");
    const input = edit.querySelector("input");

    content.addEventListener("click", function () {

        content.classList.toggle("task-accomplished");

        // if (content.classList.contains("task-accomplished")) {
        //     editButton.style.display = "none";
        // } else {
        //     editButton.style.display = "inline";
        // }
        editButton.style.display = content.classList.contains("task-accomplished")
                                     ? "none" : "inline";
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


