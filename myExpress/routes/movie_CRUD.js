var Movie = require('../models/MovieSchema');
var express = require('express');
var router = express.Router();
var requestify=require('requestify');
var mongoose = require('mongoose');
var movie = require('node-movie');

router.get('/', function(req, res) {
Movie.find(function(err, movies) {
if(err)
{
return res.send("Records unavailble");
}
res.json(movies);
});
});


router.post('/', function(req, res) {
var moviename = req.body.name;
movie(moviename, function (err, data) {

var mov = new Movie();
    mov.Title=data.Title;
    mov.Year=data.Year;
    mov.Rated=data.Rated;
    mov.Released=data.Released;
    mov.Runtime=data.Runtime;
    mov.Genre=data.Genre;
    mov.Writer=data.Writer;
    mov.Actors=data.Actors;
    mov.Language=data.Language;
    mov.Country=data.Country;
    mov.Director=data.Director;
    mov.Awards=data.Awards;
    mov.Type=data.Type;
    mov.Response=data.Response;

mov.save(function(err) {
if(err) {
res.send("No records added");
}
res.send("Record inserted");
});
});
});

// ---------------------------------------------------------------------------
// post using requestify

router.post('/add/:movie', function(req, res, next) {
 var id = req.param('movie');
 //make call to omdb
 requestify.get('http://www.omdbapi.com/?t='+id+'&y=&plot=short&r=json')
 .then(function(response) {
   // Get the response body (JSON parsed or jQuery object for XMLs)
   var  res1= new Movie(response.getBody());
   // Insert the details in DB
   res1.save( function(err){
     if (err)
     console.log(err);
     res.send(res1.Title+" movie  record Inserted");
     res.end();
   });//save
 });//requestify
});


// --------------------------------------------------------------------------------


// router.delete('/:id', function(req, res) { ........main code
router.delete('/:mid', function(req, res) {

  console.log(req.params.mid);
Movie.remove({_id: req.params.mid}, function(err, movie) {
if(err) {
res.send("MovieID not Found");
}
res.send("movie deleted");

});
});


// modal update
router.put('/:mname1/:mname2', function(req, res, next) {
  var mname1=req.param('mname1');
    var mname2=req.param('mname2');
  Movie.update(
 { _id: mname1 },
 {
    $set:{Title: mname2,Year:"1994" }
 },function(err,result){
   console.log("updated");
 }
)
res.send("Updated");
   });
module.exports = router;
