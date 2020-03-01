const express = require("express");
const router = express.Router();
const registrant = require("../controllers/registrant");
const { authenticate } = require("../middlewares/auth");

router.get("/", registrant.index);
router.post("/", registrant.store);
router.get("/:id", authenticate, registrant.show);
router.put("/:id", authenticate, registrant.update);
router.delete("/:id", authenticate, registrant.destroy);

module.exports = router;
