const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_DB_URL);

  console.log(
    `Mongo Db Connected: ${conn.connection.host}`.cyan.underline.bold
  );
};

module.exports = connectDB;
