const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MondoDB connected successfully");
  } catch (err) {
    console.error("MonogoDB connection failed !", err);
    process.exit(1);
  }
};
module.exports = connectDB;
