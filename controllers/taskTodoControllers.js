// createTaskTodoController

const Todo = require("../models/Todo");

exports.createTaskTodoController = async function (req, res) {
  const todoId = req.params.todoId;
  const todo = await Todo.findById(todoId);
  if (!todo) return res.status(404).send("Found Nothing");
  const { taskText } = req.body;
  todo.tasks.push(taskText);
  await todo.save(); // focus: it's todo not Todo
  res.json(todo);
};

exports.deleteTaskTodoController = async function (req, res) {
  const { todoId, task } = req.params;
  const todo = await Todo.findById(todoId);
  if (!todo) return res.status(404).send("Found Nothing");

  await Todo.updateOne({ _id: todoId }, { $pull: { tasks: task } });

  res.json(task + " deleted");
};
