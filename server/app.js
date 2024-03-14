const express = require('express');
const { connectToDatabase } = require('./dbschemas');

const app = express();
const port = 3002;

connectToDatabase(); 

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
