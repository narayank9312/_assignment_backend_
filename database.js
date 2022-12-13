const mongoose = require("mongoose");
var staticData = require("./constants/staticData");

function connect() {
  console.log("checking---", staticData.DatabaseUrl);
  return new Promise((resolve, reject) => {
    mongoose
      .connect(staticData.DatabaseUrl, {
        UseNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((res, err) => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
  });
}

function close() {
  return mongoose.disconnect();
}
module.exports = { connect, close };
