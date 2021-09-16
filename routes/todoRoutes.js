const express = require("express");
const ToDoCtrl = require("../controllers/todoController");

const router = express.Router();

router.post("/todos", ToDoCtrl.createToDo);
router.put("/todos/:id", ToDoCtrl.updateToDo);
router.delete("/todos/:id", ToDoCtrl.deleteToDo);
router.get("/todos/:id", ToDoCtrl.getToDoById);
router.get("/todos", ToDoCtrl.getToDos);

module.exports = router;