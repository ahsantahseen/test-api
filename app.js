const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  res
    .json({
      message: "Hello World",
    })
    .status(201);
});
module.exports = app;   
