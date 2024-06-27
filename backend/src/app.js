/** @format */

// Importing all necessary middleware and libraries
const express = require('express');
const router = require('./routes/routes');
const app = express();
const helmet = require('helmet');
const cors = require('cors');

// --- Middleware ----

// Securing tje application with Helmet.js
app.use(helmet());

// Ensuring that CORS does not interfere with requests form the frontend
app.use(cors());

// Ensuring that all incoming data is parsed to JSON format
app.use(express.json());

//--------------------

// Using the router imported from routes/routes.js to define the routes
app.use('/', router);

module.exports = app;
