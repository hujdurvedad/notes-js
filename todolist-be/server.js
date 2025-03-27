const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

const todoList = [];
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/todo", (req, res) => {
  const { todoText, completed, id } = req.body;
  todoList.push({ todoText, completed, id });
  res.send({ success: true, todoList });
});

app.delete("/todo/:id", (req, res) => {
    const todoId = parseInt(req.params.id);
    const index = todoList.findIndex(todo => todo.id === todoId);

    if (index !== -1) {
        todoList.splice(index, 1);
        res.send({ success: true, todoList });
    } else {
        res.status(404).send({ success: false, message: "Todo not found" });
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});