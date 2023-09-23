const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define a simple data structure to store entries
const entries = [];

// Define a route to display the data entry form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Define a route to handle form submissions
app.post('/add-entry', (req, res) => {
  const entry = req.body.entry;
  entries.push(entry);
  res.redirect('/');
});

// Define a route to display the entries
app.get('/entries', (req, res) => {
  res.json(entries);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
