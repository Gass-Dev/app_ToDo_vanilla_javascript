// Select DOM all elements 
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions
function addTodo(e) {
    // Prevent natural behaviour
    e.preventDefault();

    // Create todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    // Create List
    const newTodo = document.createElement('list');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
        // Clear value
    todoInput.value = "";

    // Create completed Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = "+";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = "-";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // Create edit button
    const editButton = document.createElement("button");
    editButton.innerText = "edit";
    editButton.classList.add("edit-btn");
    todoDiv.appendChild(editButton);
    editButton.onclick = function(){
        editTask(newTodo);
    };

    // Append todo list
    todoList.appendChild(todoDiv);
}

// Edit
function editTask(e){
    let editValue = prompt("Edit your task", e.firstChild.nodeValue);
    e.firstChild.nodeValue = editValue;
}

// Action Delete, Check and Edit
function deleteCheck(e) {
    const item = e.target;
    
    // Delete
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
    }

    // Check
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

    // Edit
    if (item.classList[0] === "edit-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("all");
    }
}

// Create filter todo
function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
            todo.style.display = "flex";
            break;
            case "completed":
                if (todo.classList.contains("completed")) {
                todo.style.display = "flex";
            } else {
                todo.style.display = "none";
            }
            break;
            case "uncompleted":
            if (!todo.classList.contains("completed")) {
                todo.style.display = "flex";
            } else {
                todo.style.display = "none";
            }
        }
    });
  }