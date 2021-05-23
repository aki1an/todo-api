const mongoose = require("mongoose");
const todoSchema = mongoose.Schema({
    uid: {
        type: String,
        required:true,  
    },
  todoid: {
    type: String,
    required: true,
  },
  todo: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('Todo', todoSchema);