const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

router.post("/register", auth.register);
router.post("/login", auth.login);
router.get("/me", auth.authenticate, auth.me);

module.exports = router;
