const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.LOCALHOSTPORT;

require("./startup/routes")(app);
require("./startup/prod")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});
