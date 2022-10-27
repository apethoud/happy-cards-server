const bodyParser = require("body-parser");

const db = require("../queries");

module.exports = function (app) {
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
};
