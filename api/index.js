const { sendMessage } = require("../telegraf");

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const { name, phone, type } = req.query;

  const getInfo = await sendMessage(
    `My name ${name} I want ${type}, phone ${"https://wa.me/8" + phone}`
  );
  res.send(getInfo);
};
