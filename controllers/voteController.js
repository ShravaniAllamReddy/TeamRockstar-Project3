const db = require('../models');
const router = require('express').Router();

router.post('/:id', function (req, res) {
    db.Vote.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    db.Activity.findById({ _id: req.params.id })
        .then(activity => {
            db.Vote.updateOne({ _id: activity.voteId }, {
                $push: {
                    foodVoted: req.body.foodOptions
                },
                $push: {
                    movieVoted: req.body.movieOptions
                }
            })
                .then(dbResults =>{
                    res.json(dbResults);
                });
        });
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