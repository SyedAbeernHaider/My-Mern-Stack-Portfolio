const { mongoose } = require("mongoose")

const conn = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URL).then(() => {
      console.log("MongoDB is connected !!")
    })
  } catch (error) {
    res.status(400).json({
      message: "not connected",
    })
  }
}
conn()