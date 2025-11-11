const mongoose = require('mongoose');

// Replace <your_password> with the password for user 'inotebook_user'
const mongoURI = "mongodb+srv://inotebook_user:YourPassword@cluster0.oiz6o30.mongodb.net/inotebook?retryWrites=true&w=majority";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("✅ Connected to Mongo Successfully");
    } catch (error) {
        console.error("❌ Mongo connection failed:", error);
        process.exit(1);
    }
};

module.exports = connectToMongo;

