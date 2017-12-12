// GET Route with URL /api/friends
// POST Route /api/friends

var friends = require("../data/friends");

// Routing

module.exports = function(app) {

    //API GET 
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    //API POST
    app.post("/api/friends", function(req, res) {
        res.json(friends);
    });
};

// app.post("/api/clear", function() {
//     // Empty out the arrays of data
//     friends = [];
//     console.log(friends);
// });
