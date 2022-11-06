// Require Express and Controller..
const worker = require('./workit.controller');
const express = require('express');

// Create Router..
const postRouter = express.Router();

// Route Routes..
postRouter.post('/', worker);

// Export Router..
module.exports = postRouter;