const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

todoButton.addEventListener('click', addTodo);

const allTodos = [{ name: "", done: false, createdAt: new Date() }];
console.log(allTodos);

function renderTodos() {
    todoList.childNodes.forEach((child) => child.remove());

    allTodos.forEach((todo, index) => {
        const element = createTodoElement(todo, index);
        todoList.appendChild(element);
    });
}

renderTodos();

function createTodoElement(todo, index) {
    const list = document.createElement("ul");
    list.classList.add("todo");

    const newTodo = document.createElement("list");
    newTodo.innerText = todo.name;
    newTodo.classList.add("todo-item");
    list.appendChild(newTodo);
    todoInput.value = "";

    const completedButton = document.createElement("button");
    completedButton.innerHTML = "✔️";
    completedButton.classList.add("complete-btn");
    if (todo.done) {
        newTodo.classList.toggle("completed");
    }
    completedButton.onclick = () => checkTask(index);
    list.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = "✖️";
    trashButton.classList.add("trash-btn");
    list.appendChild(trashButton);

    const editButton = document.createElement("button");
    editButton.innerText = "🖊  Edit";
    editButton.classList.add("edit-btn");
    editButton.onclick = () => editTask(index);
    list.appendChild(editButton);

    return list;
}

function addTodo(todo, index) {
    todo.preventDefault();
    const newTask = { name: todoInput.value, done: false, createdAt: new Date() };
    allTodos.push(newTask);
    todoInput.value = "";

    renderTodos();
}



// function editTask(e) {
//     let editValue = prompt("Edit your task", e.firstChild.nodeValue);
//     e.firstChild.nodeValue = editValue;
// }

// function deleteCheck(e) {
//     const item = e.target;

//     if (item.classList[0] === "trash-btn") {
//         const todo = item.parentElement;
//         to do.remove();
//     }

//     if (item.classList[0] === "complete-btn") {
//         const todo = item.parentElement;
//         to do.classList.toggle("completed");
//     }

//     if (item.classList[0] === "edit-btn") {
//         const todo = item.parentElement;
//         to do.classList.toggle("all");
//     }
// }

// function filterTodo(e) {
//     const todos = todoList.childNodes;
//     to dos.forEach(function (todo) {
//         switch (e.target.value) {
//             case "all":
//                 to do.style.display = "flex";
//                 break;
//             case "completed":
//                 if (todo.classList.contains("completed")) {
//                     to do.style.display = "flex";
//                 } else {
//                     to do.style.display = "none";
//                 }
//                 break;
//             case "uncompleted":
//                 if (!todo.classList.contains("completed")) {
//                     to do.style.display = "flex";
//                 } else {
//                     to do.style.display = "none";
//                 }
//         }
//     });
// }