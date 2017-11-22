const express = require('express');
const app = express();
const PORT = 80;
const bodyParser = require('body-parser')
const oneB = require('./1b')
const oneC = require('./1c')

app.use(bodyParser.json()); 

// 1B
app.get('/api/securerandoms/callback', function (req, res) {
  oneB.generateBytes(256, (data) => {
    res.send({
      title: "6 Secure Something",
      randoms: data
    })
  })
})

// 1 C-D
app.get('/api/securerandoms/promise', function (req, res) {
  oneC.generateBytes(256, (data) => {
    res.send({
      title: "6 Secure Something",
      randoms: data
    })
  })
})

app.listen(PORT, function () {
  console.log(`Friend Finder App listening on port ${PORT}`);
})