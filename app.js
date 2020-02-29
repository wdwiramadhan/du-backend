const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');
const routes = require("./routes/index.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(routes);

module.exports = app;
