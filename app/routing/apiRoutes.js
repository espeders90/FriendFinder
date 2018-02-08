var friendsList = require('../data/friends');
var path = require("path");

// console.log(friendsList);
module.exports = function(app) {
    //Get our friends list imported to use with the processing of our AJAX POST
    app.get('/api/friends', function(req, res) {
        res.json(friendsList);
    });

    //Begin the AJAX POST by setting up a URL to point our new friend too
    app.post('/api/friends', function(req, res) {

        //Variable that holds our userInput from our survey.
        var newFriend = req.body;

        // For Loop to collect the scores from our userInput's scores.
        for (var i = 0; i < newFriend.scores.length; i++) {
            if (newFriend.scores[i] == "1 (Strongly Disagree)") {
                newFriend.scores[i] = 1;
            }
            else if (newFriend.scores[i] == "5 (Strongly Agree)") {
                newFriend.scores[i] = 5;
            }
            else {
                newFriend.scores[i] = parseInt(newFriend.scores[i]);
            }
        }

        //Set a variable to house the score differences
        var differencesArray = [];

        //For Loop to collect the scores from our friendsList database of friends.
        for (var i = 0; i < friendsList.length; i++) {

            //setting up a variable to hold our potential "best match" friend
            var comparedFriend = friendsList[i];
            var totalDifference = 0;

            //For loop that loops through our potential "best match" scores to get a difference between user and existing database friend.
            for (var k = 0; k < comparedFriend.scores.length; k++) {
                var differenceOneScore = Math.abs(comparedFriend.scores[k] - newFriend.scores[k]);
                totalDifference += differenceOneScore;
            }

            differencesArray[i] = totalDifference;
        }

        //Variables to hold the score total difference of our database friend
        var bestFriendNum = differencesArray[0];
        var bestFriendIndex = 0;

        //Loop to collect the score difference and get our match ready to display
        for (var i = 1; i < differencesArray.length; i++) {
            if (differencesArray[i] < bestFriendNum) {
                bestFriendNum = differencesArray[i];
                bestFriendIndex = i;
            }
        }

        friendsList.push(newFriend);

        res.json(friendsList[bestFriendIndex]);
    });
};
