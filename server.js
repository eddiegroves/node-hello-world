const express = require("express");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";
const NAME = process.env.NAME || "world";

// App
const app = express();
app.get("/", (req, res) => {
  res.send(`Hello ${NAME}!`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
