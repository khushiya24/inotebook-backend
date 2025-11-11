const mongoose = require('mongoose');

// ⚠️ Replace <username>, <password>, <cluster-url> with your Atlas info
const mongoURI = "mongodb+srv://<username>:<password>@<cluster-url>/inotebook?retryWrites=true&w=majority";

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

