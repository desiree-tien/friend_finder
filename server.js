var friends = [];

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, function() {
	console.log("connected on port " + PORT);
});

//HTML ROUTES
//-----------------------------------------------------------
app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

//API ROUTES
//-----------------------------------------------------------
app.get("/api/friends", function(req, res) {
	console.log(res);
	return res.json(friends);
});

app.post("/api/new", function(req, res) {
  var newFriend = req.body;

  console.log(newFriend);

  friends.push(newFriend);

  res.json(newFriend);

});
