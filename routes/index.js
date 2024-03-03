const express = require("express");
const { sendMessage } = require("../telegraf");
const router = express.Router({ mergeParams: true });

router.use("/bot", require("./bot.router"));

router.get("/", async (req, res) => {
  const { name, phone } = req.query;

  const getInfo = await sendMessage(
    `My name ${name}, phone ${"https://wa.me/8" + phone}`
  );

  return res.send(getInfo);
});

module.exports = router;
