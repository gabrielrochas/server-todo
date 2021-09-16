const mongoose = require("mongoose");
const { db_uri } = require("../config");

mongoose
  .connect(`${db_uri}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,  
  })
  .then(() => {
    console.log("Successfuly connect to MongoDB!");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
    process.exit();
  });

  const db = mongoose.connection
  module.exports = db;