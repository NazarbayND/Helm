const express = require("express");
const validateId = require("../middleware/validateId");
const User = require("../models/user");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find().sort("name");
    res.send(users);
  } catch (error) {
    res.send("Error occured while connecting to database");
  }
});

router.get("/:id", validateId, async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).send();
  res.send(user);
});

router.post("/", async (req, res) => {
  if (!req.body.name) return res.status(400).send("Name is required.");

  const user = new User({ name: req.body.name });
  await user.save();
  res.status(201).send(user);
});

router.put("/:id", async (req, res) => {
  if (!req.body.name) return res.status(400).send("Name is required.");
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
    },
    {
      new: true,
    }
  );
  if (!user)
    return res.status(404).send("The user with the given ID was not found.");
  res.send(user);
});

router.delete("/:id", async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user)
    return res.status(404).send("The user with the given ID was not found.");

  res.status(204).send();
});

module.exports = router;
