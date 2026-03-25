// src/index.js

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Import main router
const mainRouter = require('./routes');

// Import error handler
const errorHandler = require('./middleware/errorHandler');

// Global Middleware
app.use(cors());
app.use(express.json());

// Optional root route (allowed)
app.get('/', (req, res) => {
  res.send('Welcome to the Blogify API!');
});

// ✅ SINGLE entry point for all routes
app.use('/api/v1', mainRouter);

// ✅ Error handling (must be last)
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});