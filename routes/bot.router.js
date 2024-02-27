const express = require("express");
const { sendMessage } = require("../telegraf");
const router = express.Router({ mergeParams: true });

router.post("/", async (req, res) => {
  try {
    const getInfo = await sendMessage(req.body.message);
    res.status(200).send(getInfo);
  } catch (e) {
    res.status(500).json({
      message: "на сервере произошла ошибкаю Попробуйте позже",
    });
  }
});

module.exports = router;
