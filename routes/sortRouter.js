const express = require('express');
const sortRouter = express();

const bubblesort = require('../src/bubblesort');
const selectionsort = require('../src/selectionsort');
const insertionsort = require('../src/insertionsort');
const mergesort = require('../src/mergesort');
const quicksort = require('../src/quicksort');

//sort index router
sortRouter.route('/')
    .all((req,res,next) =>{
        res.status(200).json({
            "Sort" : "Contains Selection_sort, Insertion_sort, Bubble_sort, Merge_sort, Quick_sort"
        });
    });

//Router for Bubblesort
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

//Router for Selectionsort
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

//Router for insertionsort
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

//Router for mergesort
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

//Rotuer for quicksort
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