const connectToMongo = require('./db'); // Import DB connection
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000; // Use Render port if available

// Connect to MongoDB
connectToMongo();

// ⚡ CORS setup for both localhost and Netlify
const allowedOrigins = [
    "http://localhost:3000", // local dev
    "https://devbykhushiya-inotebook-hub.netlify.app" // production frontend
];

app.use(cors({
    origin: function(origin, callback){
        // allow requests with no origin (like Postman)
        if(!origin) return callback(null, true);
        if(allowedOrigins.indexOf(origin) === -1){
            const msg = `CORS policy does not allow access from ${origin}`;
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true
}));

app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

// Start server
app.listen(port, () => {
    console.log(`iNoteBook backend Server running at http://localhost:${port}`);
});

