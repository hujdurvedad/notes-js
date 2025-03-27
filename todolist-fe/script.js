const createTodoButton = document.getElementById("create-todo");
const todoInput = document.getElementById("input");

async function createTodo(todoText) {
    const todoId = Date.now();
    const response = await fetch("http://localhost:3000/todo", {
        method: "POST",
        body: JSON.stringify({ todoText, completed: false, id: todoId }),
        headers: { "Content-Type": "application/json" },
    });

    const noteContainer = document.createElement("div");
    noteContainer.classList.add("note");
    noteContainer.id = `todo-${todoId}`;

    const textElement = document.createElement("p");
    textElement.textContent = todoText;
    textElement.classList.add("note-content");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete note";
    deleteButton.classList.add("delete-todo");
    deleteButton.addEventListener("click", () => deleteTodoButton(todoId));

    noteContainer.appendChild(textElement);
    noteContainer.appendChild(deleteButton);

    document.body.appendChild(noteContainer);
}

async function deleteTodo(todoId) {
    const response = await fetch(`http://localhost:3000/todo/${todoId}`, { method: "DELETE" });

    const noteElement = document.getElementById(`todo-${todoId}`);
    if (noteElement) {
      noteElement.remove();
    }  
}

createTodoButton.addEventListener("click", () => {
    createTodo(todoInput.value);
    todoInput.value = "";
});