const db = require('../models');
const router = require('express').Router();
const isAuthenticated = require('../utils/middleware').isAuthenticated;

router.get('/', isAuthenticated, function(req, res) {
    db.Vote.find()
        .populate('user')
        .then(dbModel => res.json(dbModel));// .catch(err => res.status(422).json(err));
});

router.post('/', isAuthenticated, function (req, res) {
    db.Vote.create({
        user: req.user._id,
        ...req.body
    })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});


module.exports = router;