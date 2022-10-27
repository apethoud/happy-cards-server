const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const db = require("./queries");
const PORT = process.env.LOCALHOSTPORT;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ info: "Initial route working!" });
});

app.get("/users", db.getUsers);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});
