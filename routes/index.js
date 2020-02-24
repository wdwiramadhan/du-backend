const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "welcome" });
});
app.use("/user", require("./user"));

module.exports = app;
