/** @format */
// Importing all necessary modules and libraries
const app = require('./app');
const PORT = 8080 || process.env.PORT;

// Starting the server
app.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}...`);
});
