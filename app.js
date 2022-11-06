// Require Express..
const express = require('express');
const postRouter = require('./route/workit.route');

// Init App..
const app = express();
app.use(express.json());

// Use Router..
app.use('/workit', postRouter);

// Export App..
module.exports = app;