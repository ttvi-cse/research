const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());

// test

// Routes
app.use("/users", require("./routes/users"))

// Start the server
const port = process.env.POST || 3000;
app.listen(port);
console.log('Server listening at ${port}');