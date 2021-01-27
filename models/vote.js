const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // },
    activity:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Activity'
    },
    //list of movies or restaurants
    foodVoted: Array
    // ref: 'User'
    ,
    movieVoted: Array
    // ref: 'User'
    ,
    eventDate: {
        type: Date,
    },

});

module.exports = mongoose.model('Vote', voteSchema);