const express = require("express");
const mongoose = require("mongoose");
const todoSchema = require("./model/todoSchema");

const app = express();

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://todo:bvAFr8LleYm17vFu@cluster0.iyecvsd.mongodb.net/todos?appName=Cluster0"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.post("/api/v1/createtodos", async (req, res) => {
  const {name,email} = req.body
  let task = new todoSchema({
    name:name,
    eamil:email
  })
  task.save()
  console.log(req.body)
});


app.get("/api/v1/all", async (req,res)=>{
  let data =await todoSchema.find();

  res.send(data)
})

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
