var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// server setup (HotRestaurant)
var app = express();
var PORT = process.env.PORT || 8080;

// data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(express.static("app/public"));

// routing
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
