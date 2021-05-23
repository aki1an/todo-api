const mongoose = require('mongoose');

require("dotenv").config({ path: "../aki.env" }); 
const db = () => {
    mongoose.connect(
      process.env.DB_CONNECTION,
      { useNewUrlParser: true, useUnifiedTopology: true },
      { useFindAndModify: false },
      () => {
        console.log("mongoose connected");
      }
    );
    const db = mongoose.connection;
    db.on("error", (err) => console.log(`error occurred :${err}`));
    db.once("open", () => {
        console.log("DB connected");
    });
}
module.exports = db