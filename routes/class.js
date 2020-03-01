const express = require("express");
const router = express.Router();
const classes = require("../controllers/class");

router.get("/", classes.index);
router.post("/", classes.store);
router.get("/:id", classes.show);
router.put("/:id", classes.update);
router.delete("/:id", classes.destroy);

module.exports = router;
