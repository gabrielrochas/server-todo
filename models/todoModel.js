const mongoose = require("mongoose");

const ToDo = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
    },
    priority: {
      type: String
    },
    status: {
      type: String
    },
    expireDate: Date,
  },
  {timestamps: true},
);

module.exports = mongoose.model('todo', ToDo)
