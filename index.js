const express = require("express");
const mongoose = require("mongoose");
const  db   = require("./Db/db");
require("dotenv").config({ path: "./aki.env" }); 
const Trouter = require("./routes/todo");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
const cors = require('cors');

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use("/", Trouter);

//database connection
db()

app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
});
