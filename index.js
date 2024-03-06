const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("welcome to the home page");
});

app.get("/addtwono", (req, res) => {
  res.send("a+b");
});

app.get("/twitter", (req, res) => {
  res.send("<h1>the_lonely_shepherd</h1>");
});

app.get("/linkedin", (req, res) => {
  res.send("<h1>mera linkedin roshan ka</h1>");
});

app.listen(PORT, () => {
  console.log(`Your app is running on http://localhost:${PORT}`);
});
