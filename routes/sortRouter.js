const express = require('express');
const sortRouter = express();

const bubblesort = require('../src/bubblesort');
const selectionsort = require('../src/selectionsort');
const insertionsort = require('../src/insertionsort');
const mergesort = require('../src/mergesort');
const quicksort = require('../src/quicksort');

sortRouter.route('/bubblesort')
    .get((req, res, next) => {
        res.status(200).json(bubblesort.Details);
    })
    .post((req, res, next) => {
        let array = bubblesort.bsort(req.body.array);
        res.status(200).json({
            'Sorted array': array
        });
    });


sortRouter.route('/selectionsort')
    .get((req, res, next) => {
        res.status(200).json(selectionsort.Details);
    })
    .post((req, res, next) => {
        let array = selectionsort.ssort(req.body.array);
        res.status(200).json({
            'Sorted array': array
        });
    });


sortRouter.route('/insertionsort')
    .get((req, res, next) => {
        res.status(200).json(insertionsort.Details);
    })
    .post((req, res, next) => {
        let array = insertionsort.isort(req.body.array);
        res.status(200).json({
            'Sorted array': array
        });
    });


sortRouter.route('/mergesort')
    .get((req, res, next) => {
        res.status(200).json(mergesort.Details);
    })
    .post((req, res, next) => {
        let array = mergesort.msort(req.body.array);
        res.status(200).json({
            'Sorted array': array
        });
    });


sortRouter.route('/quicksort')
    .get((req, res, next) => {
        res.status(200).json(quicksort.Details);
    })
    .post((req, res, next) => {
        let array = quicksort.qsort(req.body.array);
        res.status(200).json({
            'Sorted Array': array
        });
    });


module.exports = sortRouter;