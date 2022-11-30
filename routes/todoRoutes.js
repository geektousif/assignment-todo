const express = require("express");
const {
  createTaskTodoController,
  deleteTaskTodoController,
} = require("../controllers/taskTodoControllers");
const {
  createTodoController,
  deleteTodoController,
  editTodoController,
  getTodoController,
  getTodosController,
} = require("../controllers/todoControllers");

const router = express.Router();

router.get("/", getTodosController);
router.post("/", createTodoController);
router.get("/:todoId", getTodoController);
router.put("/:todoId", editTodoController);
router.delete("/:todoId", deleteTodoController);

router.post("/:todoId", createTaskTodoController);

router.delete("/:todoId/:task", deleteTaskTodoController);

module.exports = router;
