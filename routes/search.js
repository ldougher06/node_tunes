var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

router.get('/', function (req, res) {
  var collection = global.db.collection('musicInfo');

  var searchID = collection.find(ObjectID);

  console.log(searchID);
  res.render('templates/search')
});



module.exports = router;
