var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Example' });
});

router.get('/chris', (req, res, next) => {
  res.render('person', {
    name: 'Chris Naismith',
    age: 24,
    cityResiding: 'Stayner',
    cityBorn: 'Barrie',
    likes: 'playing Rocket League',
    dislikes: 'loud people on the bus and subway'
  });
});

router.get('/rebecca', (req, res, next) => {
  res.render('person', {
    name: 'Rebecca Naismith',
    age: 27,
    cityResiding: 'Stanyer',
    cityBorn: 'Hanover',
    likes: 'pizza',
    dislikes: 'doing report cards',
    relation: 'wife'
  });
});

router.get('/andrew', (req, res, next) => {
  res.render('person', {
    name: 'Andrew Naismith',
    age: 22,
    cityResiding: 'Barrie',
    cityBorn: 'Barrie',
    likes: 'using PS4',
    dislikes: 'vegetables',
    relation: 'brother'
  });
});

router.get('/dean', (req, res, next) => {
  res.render('person', {
    name: 'Dean Naismith',
    age: 53,
    cityResiding: 'Barrie',
    cityBorn: 'Barrie',
    likes: 'beer',
    dislikes: 'not beer',
    relation: 'father'
  });
});

router.get('/cindy', (req, res, next) => {
  res.render('person', {
    name: 'Cindy Naismith',
    age: 56,
    cityResiding: 'Barrie',
    cityBorn: 'Barrie',
    likes: 'the computer',
    dislikes: 'beer',
    relation: 'mom'
  });
});

module.exports = router;
