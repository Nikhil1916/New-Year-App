const express = require("express");
const { updateTodo, createTodo } = require("./types");
const app = express();
const { todos } = require("./db");
const cors = require("cors");
app.use(express.json());
app.use(cors({
  origin:'http://localhost:5173'
}));
app.post("/todo", async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const obj = {
    title,
    description,
  };

  const isValid = createTodo.safeParse(obj);
  if (isValid.success) {
    try {
      const todo = await todos.create({
        title,
        description,
        completed: false,
      });
      res.json({
        todo,
        msg: "todo created",
      });
    } catch (e) {
      res.json({
        e,
      });
    }
  } else {
    res.status(400).json({
      msg: "Invalid Input",
    });
  }
});

app.put("/completed", async (req, res) => {
  const _id = req.body.id;
    console.log({_id});
  const isValid = updateTodo.safeParse({id:_id});
  if (isValid.success) {
    await todos.update(
      {
        _id,
      },
      {
        completed: true,
      }
    );
    res.json({
        msg:"updated",
        _id
    })
  } else {
    res.status(400).json({
      msg: "Invalid Input",
    });
  }
});

app.get("/todos", async (req, res) => {
  try {
    const todo = await todos.find({});
    res.json({
        todo,
    });
  } catch (e) {
    // console.log(e);
    res.json({
      e,
    });
  }
});

const PORT = 3000;
app.listen(PORT);
