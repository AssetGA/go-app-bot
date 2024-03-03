const express = require("express");
const config = require("config");
const cors = require("cors");
const chalk = require("chalk");
const jwt = require("jsonwebtoken");

const { sendMessage } = require("../telegraf");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

function authenticateToken(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, "your_secret_key", (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}

app.get("/api", async (req, res) => {
  try {
    // const { name, phone } = req.query;

    // const getInfo = await sendMessage(
    //   `My name ${name}, phone ${"https://wa.me/8" + phone}`
    // );

    return res.send("Hallo");
  } catch (error) {
    res.status(500).send(error);
  }
});

const PORT = config.get("port") ?? 8080;

// if (process.env.NODE_ENV === 'production') {
//     console.log('Production')
// } else {
//     console.log('Development')
// }

async function start() {
  try {
    app.listen(PORT, () => {
      console.log(chalk.green(`Server has been started on port ${PORT}...`));
    });
  } catch (e) {
    console.log(chalk.red(e.message));
    process.exit(1);
  }
}

start();

module.exports = app;
