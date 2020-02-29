const express = require("express");
const router = express.Router();
const schedule = require("../controllers/schedule");

router.get("/", schedule.index);
router.post("/", schedule.store);
router.get("/:id", schedule.show);
router.put("/:id", schedule.update);
router.delete("/:id", schedule.destroy);

module.exports  = router
