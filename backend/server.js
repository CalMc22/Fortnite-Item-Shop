require('dotenv').config()
const mongoConfig = require('./config')
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  mongoConfig()
});