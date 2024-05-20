// for Common.js module
// const express = require('express');
// const path = require('path');
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';
const port = process.env.PORT || 8080;

const app = express();

//Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Body Parser Middeware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//Logger Middleware
app.use(logger);

// static setup
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/posts',posts);


// ErrorHandler Middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));