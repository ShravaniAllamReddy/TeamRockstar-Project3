const mongoose = require('mongoose');

// to get foodvoted, movievoted by user
const voteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    activity:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Activity'
    },
    foodVoted: String,
    movieVoted: String,
    eventDate: {
        type: Date,
    },

});

module.exports = mongoose.model('Vote', voteSchema);