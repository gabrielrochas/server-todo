if(process.env.NODE_ENV !== "production") {
  const dotenv = require("dotenv");
  dotenv.config()
}

module.exports = {
  db_uri: process.env.MONGODB_URI
}