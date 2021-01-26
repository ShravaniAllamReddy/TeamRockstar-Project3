const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    activity:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Activity'
    },
    //list of movies or restaurants
    foodVoted: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    movieVoted: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    created: {
        type: Date,
        default: Date.now,
    },

});

module.exports = mongoose.model('Vote', voteSchema);