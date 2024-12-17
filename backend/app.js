const express = require("express")
require("./connection/connect");
const auth = require("./Routes/auth.js")
const path = require("path");
const cors = require("cors")

const app = express()
const PORT = 1500;

app.use(express.json());
app.use(cors());

app.use("/user", auth);
app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});



app.listen(PORT, () => {
  console.log(`SERVER STARTED AT PORT ${PORT}`);
});
