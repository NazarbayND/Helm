const mongoose = require("mongoose");
const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_DB_URL } = process.env;

const dburl = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_DB_URL}/users`;

const dbUrl = "mongodb://localhost/users";
const connect = async () => {
  await mongoose.connect(dbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("Connected to MongoDB: " + dbUrl);
};

const close = () => mongoose.connection.close();

module.exports = { connect, close, url: dbUrl };
