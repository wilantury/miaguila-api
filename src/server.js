const express = require('express');
const config = require('./config/index');
const trips = require('./routes/trips/network');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send("miaguila-api V1.0");
})
app.use('/api/trips', trips)

app.listen(config.port, ()=>{
  console.log(`Server running on http://localhost:${config.port}`)
})