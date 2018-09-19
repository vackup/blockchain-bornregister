var express = require("express");
var bodyParser = require("body-parser");
// var routes = require("./routes/routes-babies-testrpc-uint.js");
var routes = require("./routes/routes-babies.js");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});