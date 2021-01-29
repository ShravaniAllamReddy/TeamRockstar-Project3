const db = require('../models');
const router = require('express').Router();
const isAuthenticated = require('../utils/middleware').isAuthenticated;


router.post('/', isAuthenticated, function (req, res) {
    db.Vote.create({
        user: req.user._id,
        ...req.body
    })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

//get all votes
// [{
//    choice: "burger",
//    count:4

// },{
//     choice:"pizaa",
//     count:2
// }]


module.exports = router;