const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
exports.db = require('knex')(configuration);
const router = require('./router');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, './build')));
app.use('/api/v1', router);

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(app.get('port'), () => {
  console.log(`Garage Bin is running on ${app.get('port')}.`); //eslint-disable-line
});

exports.app = app;
