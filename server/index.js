const path = require('path');
const express = require('express')
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes.js');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(logger('dev'));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

// Have Node serve the files for our built React app
/* for production */
//app.use(express.static(path.resolve(__dirname, '../client/build')));

/* for development */
app.use(express.static(path.join(__dirname, 'client/public')));

app.use('/', indexRouter);

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  /* for development */
  res.json({ message: "No Known API endpoint here. Try something else." });

  /* for production */
  //res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})