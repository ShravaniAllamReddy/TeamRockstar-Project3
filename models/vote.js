const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
    //votes to foodoptions by different users
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    activity:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Activity'
    },
    //list of movies or restaurants
    foodVoted: String
    // ref: 'User'
    ,
    movieVoted: String
    // ref: 'User'
    ,
    eventDate: {
        type: Date,
    },

});

module.exports = mongoose.model('Vote', voteSchema);