const express = require('express');
const app = express();
const PORT = 80;
const bodyParser = require('body-parser')
const oneB = require('./1b')
const oneC = require('./1c')
const exTwo = require('./ex2')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Excercise 1 Part B
app.get('/api/securerandoms/callback', function (req, res) {
  oneB.generateBytes(256, (data) => {
    res.send({
      title: "6 Secure Something",
      randoms: data
    })
  })
})

// Excercise 1 Part C and D
app.get('/api/securerandoms/promise', function (req, res) {
  oneC.generateBytes(256, (data) => {
    res.send({
      title: "6 Secure Something",
      randoms: data
    })
  })
})

// Excercise 2
app.get('/api/excercisetwo/:id', function (req, res) {
  exTwo.getPlanetforFirstSpeciesInFirstMovieForPerson(req.params.id, (name, species, film, home) => {
    console.log("name;" + name)
    res.send({
      name: name,
      species: species,
      firstFilm: film,
      homeWorld: home
    })
  })
})

app.listen(PORT, function () {
  console.log(`Promise Excercise is listening on port ${PORT}`);
})