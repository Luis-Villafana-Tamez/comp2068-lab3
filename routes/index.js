var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Example' });
});

router.get('/chris', (req, res, next) => {
  res.render('chris', {});
});

router.get('/rebecca', (req, res, next) => {
  res.render('rebecca', {});
});

router.get('/andrew', (req, res, next) => {
  res.render('andrew', {});
});

router.get('/dean', (req, res, next) => {
  res.render('dean', {});
});

router.get('/cindy', (req, res, next) => {
  res.render('cindy', {});
});

module.exports = router;
