/** @format */

// Importing all necessary middleware and libraries
const express = require('express');
const router = express.Router();

// The dataStore variable is designed to store the data fetched from the API endpoint on the server...
let dataStore = null;

router.post('/', (req, res) => {
  // Retrieving the query data from the request body
  const requestData = req.body;

  // The URL where queries must be made to
  const url = `https://itunes.apple.com/search?term=${requestData.artistName}&media=${requestData.artistWork}`;

  // This function sends the data via a post request to the API endpoint
  const fetchData = async () => {
    const response = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      method: 'GET',
    });

    // The data that was fetched is now assigned to the dataStore variable and sent to the server so the frontend can retrieve it whenever it is updated
    retrievedData = await response.json();
    dataStore = retrievedData.results;
    res.json(dataStore);
  };
  // Calling the above function to fetch the query data, store it and send it to the frontend
  fetchData();
});

// Exporting the router instance so it can be modularised in the app.js file
module.exports = router;
