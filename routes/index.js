var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Making Champions'
  });
});

// GET About page
router.get('/about', function(req, res, next) {
  res.render('about', {
    title: 'About'
  });
});

// GET Lesson page
router.get('/lessons', function(req, res, next) {
  res.render('lessons', {
    title: '7 Lessons On Becoming A Champion For God.'
  });
});

module.exports = router;
