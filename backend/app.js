const express = require("express");
require("dotenv").config(); // Load environment variables
require("./connection/connect"); // Connect to MongoDB
const auth = require("./Routes/auth.js");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 9500;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/user", auth);

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`SERVER STARTED AT PORT ${PORT}`);
});
