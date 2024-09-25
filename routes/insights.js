const express = require("express");
const router = express.Router();

const {
  delivery,
  demographic,
  info,
  followers,
  list,
} = require("../controller/InsightsController");

router.get("/delivery", delivery);
router.get("/demographic", demographic);
router.get("/info", info);
router.get("/followers", followers);
router.get("/list", list);

module.exports = router;
