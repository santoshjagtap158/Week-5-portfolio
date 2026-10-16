
const express = require("express");
const app = express();

app.use(express.json());

// Task 1: Home route
app.get("/", (req, res) => {
  res.send("Express API is working...");
});

// Task 1: About route
app.get("/about", (req, res) => {
  res.send("This is the About page!");
});

// Task 1: Contact route
app.post("/contact", (req, res) => {
  res.send("Contact form submitted!");
});

// Task 2: JSON API
app.get("/api/user", (req, res) => {
  res.json({
    id: 1,
    name: "Ananya",
    role: "Intern",
    skills: ["Node.js", "Express.js", "Git"]
  });
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
