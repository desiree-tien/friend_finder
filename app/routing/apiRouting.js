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