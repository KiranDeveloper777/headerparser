const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Header Parser Microservice</h1><p>Go to /api/whoami</p>");
});

app.get("/api/whoami", (req, res) => {
  res.json({
    ipaddress:
      req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"],
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server running on port " + port);
});
