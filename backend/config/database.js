const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;
console.log("MONGO_URI....", MONGO_URI)

const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Mongoose Connected");
        })
        .catch(err => {
            console.error("MongoDB connection error:", err);
        });
};

module.exports = connectDatabase;