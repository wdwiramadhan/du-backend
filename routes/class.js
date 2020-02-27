const express = require("express");
const router = express.Router();
const classes = require("../controllers/class");

router.get("/", classes.index);
router.post("/", classes.store);
// router.get("/:id", Class.show);
// router.put("/:id", Class.update);
// router.delete("/:id", Class.destroy);

module.exports = router;
