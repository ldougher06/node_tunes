var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

router.get('/', function (req, res) {
  var collection = global.db.collection('musicInfo');

  collection.find().toArray(function (err, data) {
    var formattedartists = data.map(function (artist) {
      return {
        //return is passing to the view
        _id: artist._id,
        name: artist.name,
        genre: artist.genre,
        language: artist.language,
        qty: artist.qty,
        wiki: artist.wiki
      }
    });
    console.log(formattedartists);
    res.render('templates/artistIndex', {artists: formattedartists});
  });
});


module.exports = router;
