var express = require('express');

var app = express();

//set views directory from /views
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

// serve static files from /public
app.use(express.static(__dirname + '/public'));

// set page routes
app.get('/', function(req, res) {
  res.render('index', {
    title: 'Making Champions',
    shortDesc: 'Do bold things for the Gospel!'
  });
});

app.get('/about', function(req, res) {
  res.render('about', {
    title: 'About',
    shortDesc: 'Do bold things for the Gospel!'
  });
});

app.get('/lessons', function(req, res) {
  res.render('lessons', {
    title: '7 Lessons',
    shortDesc: 'Become a champion for the Glory of God!'
  });
});

// set server port
app.listen(3000, function(){ 
  console.log('The website is running at http://localhost:3000');
}); 