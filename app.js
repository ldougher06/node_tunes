var express = require('express');
var app = express();

var bodyParser= require('body-parser');

var index = require('./routes/index');
var artistIndex = require('./routes/artistIndex');
var search = require('./routes/search');



require('./lib/mongodb');

app.set('view engine', 'ejs');

app.locals.title = 'Node Tunes';

app.use(bodyParser.urlencoded({extended: true}));
app.use('/', index);
app.use('/artistIndex', artistIndex);
app.use('/search', search);

app.post('/artist/create', function (req, res) {
  var collection = global.db.collection('musicInfo');
  collection.save(req.body, function(){
    res.redirect('/artistIndex');
  });
});

app.use(express.static('public'));

var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
  var port = server.address().port;
  //console.log(process.env);
  //console.log('Example app listening at http://%s:%d', host, port);
});

