var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

router.get('/', function (req, res) {
  res.render('templates/artist');
});


module.exports = router;


// _id: uuid ---> artistId for each album
// two request to db: one to find artist and
// one request for each album with matching uuid

// new song ---> the artistId and albumId need to match
// search artist 1st for uuid --> then get album that
// matches the artist.
// artists with same name will cause issues.
// the search goes in one direction
// better to restrict "add" until the search is correct. search on-click
// prevent default and "add" as form submit.

// use GET w/ query parameters "GET: artists/search?name=beatles" or
// $get('artists/search', {name:beatles}) etc

// look up partial matches in mongodb docs (ex. beatles vs the beatles)



