const express = require("express");
const Todo = require("../model/todoschema");
const router = express.Router();
const cors = require("cors");
router.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
// GET ALL TODOs
router.get('/', (req, res) => {
  res.send('<h1>welcome to akilan todo api</h1>');
 })
router.get("/:uid", async (req, res) => {
  const get = await Todo.find({ uid: req.params.uid });

  res.status(200).json({ success: true, get });
}); 

//GET SINGLE TODO by todo_id

router.get("/:uid/:id", async (req, res) => {
  const get = await Todo.find({ uid: req.params.uid, todoid: req.params.id });
  res.status(200).json({ success: true, get });
});

//INSERT A TODO

router.post("/:uid", async (req, res) => {
  const todo = new Todo({
    uid: req.params.uid,
    todoid: req.body.todoid,
    todo: req.body.todo,
    complete: req.body.status,
    date: req.body.date,
  });

  todo.save();
  const po = todo;
  res.status(201).json({
    success: true,
    msg: "successfully added",
  });
});

//DELETE A TODO by todo_id

router.delete("/:uid/:id", async (req, res) => {
  const a = await Todo.findOneAndDelete({
    uid: req.params.uid,
    todoid: req.params.id,
  });
  res.status(202).json({ success: true, message: "todo deleted" });
});

//UPDATE A TODO by todo_id

router.patch("/:uid/:id", async (req, res) => {
  console.log(req.body);
  await Todo.findOneAndUpdate(
    {
      uid: req.params.uid,
      todoid: req.params.id,
    },
    {
      todo: req.body.todo,
      complete: req.body.status,
      data: req.body.date,
    }
  );
  res.status(200).json({ success: true, msg: "todo updated" });
});
module.exports = router;