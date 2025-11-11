const mongoose = require('mongoose');

// ⚠️ Replace <YourPassword> with the password for the user 'inotebook_user'
// The database name is 'inotebook'
const mongoURI = "mongodb+srv://inotebook_user:vcGZheEL6oCEvZWE@cluster0.oiz6o30.mongodb.net/inotebook?retryWrites=true&w=majority";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("✅ Connected to Mongo Successfully");
    } catch (error) {
        console.error("❌ Mongo connection failed:", error);
        process.exit(1); // stops app if DB fails
    }
};

module.exports = connectToMongo;
