const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const userRoutes = require('./routes/users');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/rest-api-example', {
  useMongoClient: true
}).then(db => console.log('db is connected'))
  .catch(err => console.log(err));

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());

app.use('/users', userRoutes);


app.listen(app.get('port'), () => {
  console.log('server on port ', app.get('port'));
});
