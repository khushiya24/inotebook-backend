const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/inotebook"; // DB name included

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("✅ Connected to Mongo Successfully");
    } catch (error) {
        console.error("❌ Mongo connection failed:", error);
        process.exit(1); // stop the app if DB fails
    }
};

module.exports = connectToMongo;

