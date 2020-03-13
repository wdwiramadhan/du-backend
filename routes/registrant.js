const express = require("express");
const router = express.Router();
const registrant = require("../controllers/registrant");
const { authenticate } = require("../middlewares/auth");

router.get("/", authenticate, registrant.index);
router.post("/", registrant.store);
router.post("/find", registrant.findByEmail);
router.get("/:id", authenticate, registrant.show);
router.put("/:id", authenticate, registrant.update);
router.delete("/:id", authenticate, registrant.destroy);

module.exports = router;
