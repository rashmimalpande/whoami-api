var express = require('express');
var app = express();



app.enable("trust proxy");

app.get('/api/whoami', function (req, res) {
    var useragent = req.headers["user-agent"];
    var os = useragent.slice(useragent.indexOf("(")+1, useragent.indexOf(")"))
    var language = req.acceptsLanguages();

    res.json({"ipaddress": req.ip, "language": language[0], "software": os});
});

app.listen(process.env.PORT || 8080);