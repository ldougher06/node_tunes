var express = require('express');
var index = require('./routes/index');
var bodyParser= require('body-parser');
var search = require('./routes/search');
var artistIndex = require('./routes/artistIndex');
var app = express();

require('./lib/mongodb');

app.set('view engine', 'ejs');

app.locals.title = 'Node Tunes';

app.use('/', index);
app.use('/search', search);
app.use('/artistIndex', artistIndex);
app.use(bodyParser.urlencoded({extended: true}));

app.post('/artist/create', function (req, res) {
  var collection = global.db.collection('musicInfo');
  collection.save(req.body, function(){
    res.redirect('/');
  });
});

var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
  var port = server.address().port;
  //console.log(process.env);
  //console.log('Example app listening at http://%s:%d', host, port);
});

