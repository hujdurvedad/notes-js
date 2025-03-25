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
  res.send(todoList);
});

app.delete("/todo", (req, res) => {
    todoList.pop();
    res.send(todoList);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

