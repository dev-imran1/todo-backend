const express = require("express")

const app = express()

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://todo:bvAFr8LleYm17vFu@cluster0.iyecvsd.mongodb.net/todos?appName=Cluster0')
  .then(() => console.log('Connected!'));



app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(800, () => {
  console.log('Server is running on http://localhost:8000')
})

// bvAFr8LleYm17vFu