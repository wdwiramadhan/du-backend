const express = require("express");
const router = express.Router();
const schedule = require("../controllers/schedule");
const { authenticate } = require("../middlewares/auth");

router.get("/", schedule.index);
router.post("/", authenticate, schedule.store);
router.get("/:id", schedule.show);
router.put("/:id", authenticate, schedule.update);
router.delete("/:id", authenticate, schedule.destroy);

module.exports  = router
