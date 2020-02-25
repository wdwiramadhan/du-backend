const express = require("express");
const router = express.Router();
const user = require("../controllers/user");

router.get("/", user.index);
router.post("/", user.store);
router.get("/:id", user.show);
router.put("/:id", user.update);
router.delete("/:id", user.destroy);

module.exports = router;
