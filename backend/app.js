const express = require("express")
require("./connection/connect");
const auth = require("./Routes/auth.js")
const cors = require("cors")

const app = express()
const PORT = 1500;

app.use(express.json());
app.use(cors());

app.use("/user", auth);




app.listen(PORT, () => {
  console.log(`SERVER STARTED AT PORT ${PORT}`);
});
