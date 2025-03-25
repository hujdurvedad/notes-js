const createTodoButton = document.getElementById("createTodo");
const deleteTodoButton = document.getElementById("deleteTodo");
const todoInput = document.getElementById("input");

async function createTodo(todoText) {
    const response = await fetch("http://localhost:3000/todo", {
        method: "POST",
        body: JSON.stringify({ todoText, completed: false, id: 1 }),
        headers: { "Content-Type": "application/json" },
    });

    console.log(response);

    const text = document.createElement("p");
    text.textContent = todoText;
    text.id = "todoItem";
    document.body.appendChild(text);
}

async function deleteTodo() {
    await fetch("http://localhost:3000/todo", { method: "DELETE" });

    const textElement = document.getElementById("todoItem");
    if (textElement) {
        textElement.remove();
    }
}

createTodoButton.addEventListener("click", () => {
    createTodo(todoInput.value);
});

deleteTodoButton.addEventListener("click", deleteTodo);
