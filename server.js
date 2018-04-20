const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
var bodyParser = require("body-parser");
const app = express();
var mongoose = require("mongoose");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Requiring our models for syncing
var db = require("./models");

// Send every request to the React app
// Define any API routes before this runs
app.post("/api/articles", function(req, res){
  db.Article.create(req.body).then(function(res){
      res.end()
  }).catch(function(err){
      res.json(err); 
  })
});

app.get("/api/articles", function(req, res){
  db.Article.find().then(function(response){
    res.json(response);
  })
})

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


//
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  //useMongoClient: true
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
