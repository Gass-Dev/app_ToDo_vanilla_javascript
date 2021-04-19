const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

todoButton.addEventListener('click', addTodo);

const state = {
    editedTaskIndex: null,
    editedTaskName: "",
    allTodos: [],
};

function renderTodos() {
    todoList.childNodes.forEach((child) => child.remove());

    state.allTodos.forEach((todo, index) => {
        const element = createTodoElement(todo, index);
        todoList.appendChild(element);
    });
}

renderTodos();

function createTodoElement(todo, index) {
    const list = document.createElement("li");
    list.classList.add("todo");

    let taskNameElement;
    if (index === state.editedTaskIndex) {
        taskNameElement = createTaskNameInput(todo.name);
    } else {
        taskNameElement = createTaskNameElement(todo.name);
    }
    list.appendChild(taskNameElement);

    const completedButton = document.createElement("button");
    completedButton.innerHTML = "✔️";
    completedButton.classList.add("complete-btn");
    if (todo.done) {
        taskNameElement.classList.toggle("completed");
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
    editButton.onclick = () => toggleEdit(index);
    list.appendChild(editButton);

    return list;
}

function createTaskNameElement(taskName) {
    const newTodo = document.createElement("span");
    newTodo.innerText = taskName;
    newTodo.classList.add("todo-item");
    return newTodo;
}

function createTaskNameInput(taskName) {
    const span = document.createElement("span");

    const input = document.createElement("input");
    input.value = taskName;
    input.oninput = (e) => {
        state.editedTaskName = e.target.value;
    };
    span.appendChild(input);

    const saveButton = document.createElement("button");
    saveButton.innerHTML = "💾 Save";
    saveButton.onclick = () => editTask();
    span.appendChild(saveButton);

    return span;
}

function addTodo(e) {
    e.preventDefault();
    const newTask = { name: todoInput.value, done: false, createdAt: new Date() };
    state.allTodos.push(newTask);
    todoInput.value = "";
    renderTodos();
}

function checkTask(index) {
    state.allTodos[index].done = true;
    renderTodos();
}

function toggleEdit(index) {
    state.editedTaskIndex = index;
    state.editedTaskName = state.allTodos[index].name;
    renderTodos();
}

function editTask() {
    state.allTodos[state.editedTaskIndex].name = state.editedTaskName;
    state.editedTaskIndex = null;
    state.editedTaskName = "";
    renderTodos();
}

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
