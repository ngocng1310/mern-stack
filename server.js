const express = require('express');
// onther option is mongo driver
const mongoose = require('mongoose');
// body-parser allows us to take request and get data from request' body
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

// process.env.port (nodejs) is used in product env
const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
