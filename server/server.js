'use strict';
// [START app]
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  // res.send('Hello from App Engine!');
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));

});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
// [END app]

module.exports = app;