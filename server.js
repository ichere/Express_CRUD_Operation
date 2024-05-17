// for Common.js module
// const express = require('express');
// const path = require('path');
import express from 'express';
import path from 'path';
import posts from './routes/posts.js';
const port = process.env.PORT || 8080;

const app = express();

//Body Parser Middeware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use('/api/posts',posts);

app.listen(port, () => console.log(`Server is running on port ${port}`));