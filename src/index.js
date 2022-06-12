require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// api config
const app = express();
const PORT = process.env.PORT || 9000;

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

// db config
mongoose
  .connect(process.env.DBConncetionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch((error) => {
    console.log("database connection failed. exiting now...");
    console.error(error);
  });

// api endpoints
app.get("/", (req, res) => {
  res.json({
    message: "Hey welcome to dsmeglobal",
  });
});

// listner
app.listen(PORT, () => {
  console.log("Api working " + PORT);
});
