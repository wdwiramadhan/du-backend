const express = require("express");
const app = express();
const auth = require("./auth");
const user = require("./user");
const schedule = require("./schedule");
const { authenticate } = require("../middlewares/auth");

app.get("/", (req, res) => {
  res.json({ message: "welcome" });
});
app.use("/auth", auth);
app.use("/user", authenticate, user);
app.use("/schedule", schedule);

module.exports = app;
