const connectToMongo = require('./db'); // Import DB connection
const express = require('express');
var cors = require('cors');
const app = express();
const port = 5000;

// Connect to MongoDB
connectToMongo();
app.use(cors({
  origin: "http://localhost:3000"  // allow frontend running on port 3000
}));
app.use(express.json());

// Basic route
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


// Start server
app.listen(port, () => {
  console.log(`iNoteBook backend Server running at http://localhost:${port}`);
});
