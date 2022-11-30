const Todo = require("../models/Todo");

exports.createTodoController = async function (req, res) {
  try {
    const { title } = req.body;
    if (title) {
      const createdNewTodo = await Todo.create({ title });
      return res.json(createdNewTodo);
    }
    return res.json("Correct input needed");
  } catch (error) {
    console.log(error);
  }
};

exports.deleteTodoController = async function (req, res) {
  const { todoId } = req.params;
  if (!todoId) {
    res.status(400).json("Todo doesn't exist");
  }
  await Todo.findByIdAndDelete(todoId);
  //validation goes here
  res.status(201).json("Todo Deleted");
};

exports.editTodoController = async function (req, res) {
  const { todoId } = req.params;
  if (!todoId) {
    return res.status(400).json("Todo doesn't exist");
  }
  const update = await Todo.findByIdAndUpdate(todoId, req.body.title);
  //validation goes here
  return res.status(201).json(update);
};

exports.getTodoController = async function (req, res) {
  const { todoId } = req.params;
  if (!todoId) {
    return res.status(400).json("Todo doesn't exist");
  }
  const oneTodo = await Todo.findById(todoId);
  //validation goes here
  return res.json(oneTodo);
};

exports.getTodosController = async function (req, res) {
  const todos = await Todo.find();
  return res.json(todos);
};
