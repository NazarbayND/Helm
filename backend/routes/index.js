const express = require("express");
const router = express.Router();

router.get("/health", (req, res) => {
  res.send("<h1>Api is running!</h1>");
});

module.exports = router;
