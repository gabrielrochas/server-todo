const ToDo = require("../models/todoModel");

// Create a new To-Do
createToDo = (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a item to-do",
    });
  }
  const todo = new ToDo(body);
  if (!todo) {
    return res.status(400).json({
      success: false,
      error: err,
    });
  }

  todo
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: todo._id,
        message: "To-Do successfuly created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "To-Do not created!",
      });
    });
};

// Update To_Do
updateToDo = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide some data do update",
    });
  }
  ToDo.findOne({ _id: req.params.id }, (error, todo) => {
    if (error) {
      return res.status(400).json({
        error,
        message: "To-Do not found",
      });
    }
    todo.title = body.title;
    todo.description = body.description;
    todo.priority = body.priority;
    todo.status = body.status;
    todo
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: todo._id,
          message: "To-Do updated!",
        });
      })
      .catch((error) => {
        return res.status(400).json({
          error,
          message: "To-Do not updated!",
        });
      });
  });
};

// Delete To-Do
deleteToDo = async (req, res) => {
  await ToDo.findByIdAndDelete({ _id: req.params.id }, (error, todo) => {
    if (error) {
      return res.status(400).json({
        success: false,
        error: error,
      });
    }
    if (!todo) {
      return res.status(404).json({
        success: false,
        error: "To-do not found",
      });
    }
    res.status(200).json({
      success: true,
      data: todo,
    });
  }).catch((error) => console.log(error));
};

// Get a to-do by ID
getToDoById = async (req, res) => {
  await ToDo.findById({ _id: req.params.id }, (error, todo) => {
    if (error) {
      return res.status(400).json({
        success: false,
        error: error,
      });
    }
    if (!todo) {
      return res.status(404).json({
        success: false,
        error: "To-do not found",
      });
    }
    res.status(200).json({
      success: true,
      data: todo,
    });
  }).catch((error) => console.log(error));
};

// Get all todos
getToDos = async (req, res) => {
  await ToDo.find({}, (error, todos) => {
    if (error) {
      return res.status(400).json({
        success: false,
        error: error,
      });
    }
    if (!todos) {
      return res.status(404).json({
        success: false,
        error: "To-dos not found",
      });
    }
    res.status(200).json({
      success: true,
      data: todos,
    });
  });
};

module.exports = {
  createToDo,
  updateToDo,
  deleteToDo,
  getToDoById,
  getToDos,
};
