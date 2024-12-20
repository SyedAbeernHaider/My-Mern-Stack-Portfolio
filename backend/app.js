const express = require("express");
require("dotenv").config();
require("./connection/connect"); // DB connection
const auth = require("./Routes/auth.js"); // API routes
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 1500;

// Middleware
app.use(express.json());
app.use(cors());

// API Routes
app.use("/user", auth);

// Serve React build files in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; // Export for Vercel
