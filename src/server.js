const express = require('express');
const config = require('./config/index');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send("miaguila-api V1.0");
})

app.listen(config.port, ()=>{
  console.log(`Server running on http://localhost:${config.port}`)
})