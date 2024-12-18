const express = require("express");
require("dotenv").config(); // Load environment variables
require("./connection/connect"); // Connect to MongoDB
const auth = require("./Routes/auth.js");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 1500;

// Middleware
app.use(express.json());
app.use(cors());

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, "public")));

// Serve React build files
app.use(express.static(path.resolve(__dirname, "frontend", "build")));

// Routes
app.use("/user", auth);

// Serve React app index.html on the root path
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`SERVER STARTED AT PORT ${PORT}`);
});
