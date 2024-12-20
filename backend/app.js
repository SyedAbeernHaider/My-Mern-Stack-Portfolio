const express = require("express");
require("dotenv").config(); // Load environment variables
require("./connection/connect"); // Connect to MongoDB
const auth = require("./Routes/auth.js");
const cors = require("cors");
const path = require("path");


const app = express();
const PORT = process.env.PORT || 9500;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/user", auth);



// Start the server
app.listen(PORT, () => {
  console.log(`SERVER STARTED AT PORT ${PORT}`);
});
