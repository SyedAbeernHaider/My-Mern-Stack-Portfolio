const express = require("express");
require("dotenv").config();
require("./connection/connect");
const auth = require("./Routes/auth.js");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 1500;

// Middleware
app.use(express.json());
app.use(cors());

// Serve React build files
app.use(express.static(path.join(__dirname, "frontend/build")));

// API Routes
app.use("/user", auth);

// Fallback route to serve React app for non-API routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
