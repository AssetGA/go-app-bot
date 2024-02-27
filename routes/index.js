const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/bot", require("./bot.router"));

module.exports = router;
