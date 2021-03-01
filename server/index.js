require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const crewList  = require('./static_data/crew.json');

const app = express();
app.use(bodyParser.json());


app.get('/ping', function(req, res) {
  return res.send('pong');
});

// TODO: remove static data 
app.get('/api/static-crew', function(req, res) {
  return res.json( crewList );
});


app.get('/api/*', function(req, res) {
  return res.status(404).send('This is not the path youre looking for...');
});

// link all static files
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 3001, port => {
  console.log(
    `backend server is listening on port: ${process.env.PORT || 3001}
    `
  );
});
