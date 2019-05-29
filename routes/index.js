var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Example' });
});

const persons = [
  {
    path: 'chris',
    name: 'Chris Naismith',
    age: 24,
    cityResiding: 'Stayner',
    cityBorn: 'Barrie',
    likes: 'playing Rocket League',
    dislikes: 'loud people on the bus and subway'
  },
  {
    path: 'rebecca',
    name: 'Rebecca Naismith',
    age: 27,
    cityResiding: 'Stanyer',
    cityBorn: 'Hanover',
    likes: 'pizza',
    dislikes: 'doing report cards',
    relation: 'wife'
  },
  {
    path: 'andrew',
    name: 'Andrew Naismith',
    age: 22,
    cityResiding: 'Barrie',
    cityBorn: 'Barrie',
    likes: 'using PS4',
    dislikes: 'vegetables',
    relation: 'brother'
  },
  {
    path: 'dean',
    name: 'Dean Naismith',
    age: 53,
    cityResiding: 'Barrie',
    cityBorn: 'Barrie',
    likes: 'beer',
    dislikes: 'not beer',
    relation: 'father'
  },
  {
    path: 'cindy',
    name: 'Cindy Naismith',
    age: 56,
    cityResiding: 'Barrie',
    cityBorn: 'Barrie',
    likes: 'the computer',
    dislikes: 'beer',
    relation: 'mom'
  }
];

router.get('/:name', (req, res, next) => {
  const name = req.params.name;

  // Search our persons array, and find where the name variable is equal to the path in our person
  const person = persons.find(per => per.path === name);

  // if no person - generate error, and pass to next function
  if (!person) {
    return next(new Error('Person does not exist'));
  }

  // Pass our found person - to the person view
  res.render('person', person);
});

module.exports = router;
