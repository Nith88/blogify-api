// src/index.js

// 1. Import the express library
const express = require('express');

// 2. Create an instance of an Express application
const app = express();

// 3. Define the port
const PORT = 3000;

// 4. Create a basic GET route for the root path
app.get('/', (req, res) => {
  res.send('Welcome to the Blogify API!');
});

// 5. Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});