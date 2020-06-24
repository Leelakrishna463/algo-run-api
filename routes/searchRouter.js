const express = require('express');
const searchRouter = express.Router();
const linearSearch = require('../src/linearSearch');
const binarySearch = require('../src/binarySearch');


//Search index router
searchRouter.route('/')
    .all((req,res,next) =>{
        res.status(200).json({
            "Search" : "Contains Linear Search and Binary Search"
        });
    });



//Router for Linear Search 
searchRouter.route('/linearsearch')
    .get((req, res, next) => {
        res.status(200).json(linearSearch.Details);
    })
    .post((req, res, next) => {
        let pos = linearSearch.search(req.body.array, req.body.searchElement);
        res.status(200).json(pos);
    });



//Router for Binary Search
searchRouter.route('/binarysearch')
    .get((req, res, next) => {
        res.status(200).json(binarySearch.Details);
    })
    .post((req, res, next) => {
        let pos = binarySearch.search(req.body.array, req.body.searchElement);
        if (typeof pos !== 'number') {
            next(pos);
        }
        else {
            res.status(200).json(pos);
        }
    });


module.exports = searchRouter;