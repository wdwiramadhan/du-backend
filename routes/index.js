const express = require("express");
const app = express();
const auth = require("./auth");
const user = require("./user");
const classes= require("./class");
const { authenticate } = require("../middlewares/auth");

app.get("/", (req, res) => {
  res.json({ message: "welcome" });
});
app.use("/auth", auth);
app.use("/user", authenticate, user);
app.use("/class", classes);

module.exports = app;
