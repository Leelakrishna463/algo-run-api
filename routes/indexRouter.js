//Router for home
const express = require('express');
const indexRouter  = express.Router();

//Return Welcome Message
indexRouter.route('/')
    .all((req,res,next) => {
        res.status(200).json({
            "Welcome" : "Welcome to Algo-run-api"
        });
    });


module.exports = indexRouter;