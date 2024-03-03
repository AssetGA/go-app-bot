const express = require("express");
const config = require("config");
const cors = require("cors");
const chalk = require("chalk");

const { sendMessage } = require("../telegraf");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/api", async (req, res) => {
  const { name, phone } = req.query;

  const getInfo = await sendMessage(
    `My name ${name}, phone ${"https://wa.me/8" + phone}`
  );

  return res.send(getInfo);
});

const PORT = config.get("port") ?? 8080;

// if (process.env.NODE_ENV === 'production') {
//     console.log('Production')
// } else {
//     console.log('Development')
// }

app.listen(PORT, () => {
  console.log(chalk.green(`Server has been started on port ${PORT}...`));
});

module.exports = app;
