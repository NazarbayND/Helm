const mongoose = require("mongoose");
const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_DB_URL } = process.env;

const dbUrl =
  `mongodb://root:sa-homework@${MONGO_DB_URL}/users`;

const connect = async () => {
  await mongoose.connect(dbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("Connected to MongoDB: " + dbUrl);
};

const close = () => mongoose.connection.close();

module.exports = { connect, close, url: dbUrl };
