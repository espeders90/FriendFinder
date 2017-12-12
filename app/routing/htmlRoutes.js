// GET Route 
// route that leads to home.html
// Dependencies

var path = require("path");

//Routing

module.exports = function(app) {

    app.get("/friends", function(req, res) {
        console.log("friends");
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    app.get("*", function(req, res) {
        console.log("home");
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};

console.log("html connected");
