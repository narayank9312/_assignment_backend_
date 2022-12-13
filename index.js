const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

const database = require("./database");

database
  .connect()
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log("errod-", err);
  });

const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
// var routes = require("./routes/routes");
// routes(app);
app.use(express.json());

const routes = require("./routes/routes");
app.use("/", routes);

const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.urlencoded());

app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.listen(port, () => console.log(`server running at port ${port}`));
