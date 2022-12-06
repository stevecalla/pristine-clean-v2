const mongoose = require("mongoose");

mongoose.connect(
  // process.env.MONGODB_URI || "mongodb://localhost:27017/pristine-clean",
  process.env.MONGODB_URI || `mongodb://localhost:27017/${process.env.DB_NAME}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
