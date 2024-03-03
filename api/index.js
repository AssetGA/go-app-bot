const express = require("express");
const config = require("config");
const cors = require("cors");
const chalk = require("chalk");

const routes = require("../routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// app.get("/api", async (req, res) => {
//   res.send("Hello World!");
// });

// app.post("/api", async (req, res) => {
//   const { name } = req.query;
//   console.log("1586", name);
//   res.send(name);
// });

app.use("/api", routes);

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
