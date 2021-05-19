const express = require("express");
const cors = require("cors");
const homeRoutes = require("./routes/index");
const userRoutes = require("./routes/users");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/", homeRoutes);
app.use("/api/users", userRoutes);

module.exports = app;
