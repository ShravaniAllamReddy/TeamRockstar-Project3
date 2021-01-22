const db = require('../models');
const router = require('express').Router();
const isAuthenticated = require('../utils/middleware').isAuthenticated;
/**
 * Activity - Read All
 */
router.get('/', isAuthenticated, function(req, res) {
    // we can pass in things in the query of a REST call!
    // console.log('hello');
    db.Activity.find()
        .populate('user')
        .then(dbModel => res.json(dbModel));// .catch(err => res.status(422).json(err));
});

/**
 * Activity - Read One
 */
router.get('/:id', isAuthenticated, function(req, res) {
    db.Activity.findById(req.params.id)
        .populate('user')
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Activity - Create
 * Notice how we are also taking in the User Id! Important!
 * We need the isAuthenticated middleware in the route to have a user in the request
 */
router.post('/', isAuthenticated, function(req, res) {
    db.Activity.create({
        user: req.user._id,
        ...req.body
    })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Activity - Update
 */
router.put('/:id', isAuthenticated, function(req, res) {
    db.Activity.findByIdAndUpdate(req.params.id, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Activity - Delete
 */
router.delete('/:id', isAuthenticated, function(req, res) {
    db.Activity.findByIdAndDelete(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

// Defining methods for the booksController
module.exports = router;
