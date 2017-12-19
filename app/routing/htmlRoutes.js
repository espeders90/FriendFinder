// GET Route 
// route that leads to home.html
// Dependencies

var path = require("path");

//Routing

module.exports = function(app) {

    app.get("/survey", function(req, res) {
        console.log("survey");
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    // app.get("/survey", function(req, res) {
    //     console.log("survey");
    //     res.sendFile(path.join(_dirname, ""))
    // })
    app.get("*", function(req, res) {
        console.log("home");
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};

console.log("html connected");
