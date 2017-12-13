// GET Route with URL /api/friends
// POST Route /api/friends

var friends = require("../data/friends.js");

// Routing

module.exports = function(app) {

    //API GET 
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    //API POST
    app.post("/api/friends", function(req, res) {
        res.json(friends);


        // app.post("/api/clear", function() {
        //     // Empty out the arrays of data
        //     friends = [];
        //     console.log(friends);
        // });

        //Bestmatch to be shown at the end in object form

        var Match = {
            name: "",
            photo: "",
            score: 100
        };



        var input = req.body;
        var inputName = input.name;
        var inputPhoto = input.photo;
        var inputScore = input.score;

        var result = 0;

        // Looping through all possible matches in the friends list

        for (var i = 0; i < friends.length; i++) {

            console.log(friends[i].name);
            result = 0;

            // looping individual scores
            for (var j = 0; j < friends[i].scores[j]; j++) {

                result += Math.abs(parseInt(inputScore[j]) - parseInt(friends[i].scores[j]));

                if (result <= Match.score) {

                    Match.name = friends[i].name;
                    Match.photo = friends[i].photo;
                    Match.score = result;
                }
            }
        }
        friends.push(input);

        res.json(Match);

    });
};
