const { mongoose } = require("mongoose")

const conn = async (req, res) => {
  try {
    await mongoose.connect("mongodb+srv://haiderabeer794:axbrCHr3FNmu9rdZ@portfoliocluster.fcuh8.mongodb.net/?retryWrites=true&w=majority&appName=PortfolioCluster").then(() => {
      console.log("MongoDB is connected !!")
    })
  } catch (error) {
    res.status(400).json({
      message: "not connected",
    })
  }
}
conn()