const express = require('express');
const path = require('path');

const app = express();

// Serve static files from directory
app.use(express.static(path.join(__dirname, 'dist/assets')));

// Define a route that serves your main HTML file (your React app's entry point)
app.get('/', (req, res) => {
  res.sendFile('index.html');
});

// Start your server
const port = process.env.PORT || 5137;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
