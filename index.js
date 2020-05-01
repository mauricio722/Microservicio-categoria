const express = require('express');
const route = require('./app/route');
const ErrorHandlerMiddleware = require('./app/utils/ErrorHandlerMiddleware');
const { PREFIX } = require('./app/config/appConfig');

const app = express();


// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(PREFIX, route);
app.use(ErrorHandlerMiddleware.MainHandler);


// starting the server
app.listen(process.env.PORT || 4000, () => {
  console.log('http://localhost:4000');
});

module.exports = app;
