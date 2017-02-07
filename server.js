var express = require('express');
var app = express();

app.enable("trust proxy");

app.get('/api/whoami', function (req, res) {
  res.json({"ipaddress": req.ip});
});

app.listen(process.env.PORT || 8080);