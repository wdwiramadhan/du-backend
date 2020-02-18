const express = require("express");
const router = express.Router();
const user = require("../controllers/user");

router.get("/", user.getAll);
router.post("/", user.create);
router.get("/:id", user.getById);
router.put("/:id", user.update);
router.delete("/:id", user.delete);

module.exports = router;
