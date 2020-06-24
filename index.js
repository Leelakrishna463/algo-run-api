//Importing dependancies
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const app = express();


//Search Router and Sort Router
var searchRouter = require('./routes/searchRouter');
var sortRouter = require('./routes/sortRouter');
var indexRouter = require('./routes/indexRouter');

//Setting Port and Development Environment
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'production';


//Express app using the specified port and running in the specified environment.
app.set('port', PORT);
app.set('env', NODE_ENV);


//Log incoming Requests
app.use(logger('tiny'));

//Using Request body as JSON
app.use(bodyParser.json());

app.use('/',inde)
app.use('/search', searchRouter);
app.use('/sort', sortRouter);

//Handling 404
app.use((req, res, next) => {
    const err = new Error(`${req.method} ${req.url} Not Found`);
    err.status = 404;
    next(err);
});

//Error Handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message,
        },
    });
});


//Server Started
app.listen(PORT, () => {
    console.log(`Express Server Started on Port ${app.get('port')} | Environment : ${app.get('env')}`);
});