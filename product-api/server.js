const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();

app.use(express.json());

// Product API routes
app.use("/api/products", require("./routes/productRoutes"));

// Server port
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose
.connect(process.env.MONGO_URI)
.then(() => {
console.log("MongoDB connection established");
})
.catch((error) => {
console.log("Error connecting to MongoDB:", error.message);
});

// Test route
app.get("/", (req, res) => {
res.send("Server Running & MongoDB Connected!");
});

// Start server
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
