// Variables
const express = require('express');
const ejs = require('ejs');
const pinger = require('keep-alive')('https://random.adsarebbbad.repl.co/', 300000);
const app = express();

app.use(express.static('views'));
app.use(express.static('public'));
// Setting the view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('*', (req, res) => {
  res.render('404', {variables: req});
});

app.listen(3000);
console.log("server is up");