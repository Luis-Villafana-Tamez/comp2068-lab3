var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'JavaScript Frameworks Lab 3' });
});

const persons = [
  {
    path: 'luis',
    name: 'Luis Villafana',
    age: 30,
    cityResiding: 'Barrie',
	countryResiding: 'Canada',
    cityBorn: 'Toluca',
	countryBorn: 'Mexico',
    likes: 'solving math problems',
    dislikes: 'gimmicks'
  },
  {
    path: 'rose',
    name: 'Rose Tamez',
    age: 49,
    cityResiding: 'Chicago',
	countryResiding: 'US',
    cityBorn: 'CDMX',
	countryBorn: 'Mexico',
    likes: 'cooking foods',
    dislikes: 'dirty floors',
	relation: 'mom'
  },
  {
    path: 'maria',
    name: 'Maria Villafana',
    age: 27,
    cityResiding: 'Chicago',
	countryResiding: 'US',
    cityBorn: 'CDMX',
	countryBorn: 'Mexico',
    likes: 'going to museums',
    dislikes: 'shallow guys',
	relation: 'sister'
  },
  {
    path: 'leo',
    name: 'Leo Tiscareno',
    age: 22,
    cityResiding: 'Naucalpan',
	countryResiding: 'Mexico',
    cityBorn: 'Leon',
	countryBorn: 'Mexico',
    likes: 'partying with my friends',
    dislikes: 'fake ideas',
	relation: 'brother'
  },
  {
    path: 'james',
    name: 'James Bond',
    age: 38,
    cityResiding: 'Edinburgh',
	countryResiding: 'Scotland',
    cityBorn: 'Edinburgh',
	countryBorn: 'Scotland',
    likes: 'acrobatics',
    dislikes: 'bad people',
	relation: 'spirit animal'
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
