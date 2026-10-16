require("dotenv").config();
const express = require("express");
const app = express();

// Built-in Middleware
app.use(express.json());

// Custom Middleware
const logger = require("./utils/logger");
app.use(logger);

// Test Route
app.get("/", (req, res) => {
  res.send("Day-4 Middleware is working!");
});

// User Routes
const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);
// Test Error Route
app.get("/test-error", (req, res, next) => {
  next(new Error("Test error"));
});
// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({
    error: "Internal Server Error"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
