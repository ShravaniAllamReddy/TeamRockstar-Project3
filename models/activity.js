const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const activitySchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            allowNull: false,
            required: 'Enter activity name'
        },
        description: {
            type: String,
            trim: true,
            allowNull: false,
            required: 'Enter activity description'
        },
        foodOption1: {
            type: String,
        },
        foodOption2: {
            type: String,
        },
        foodOption3: {
            type: String,
        },
        foodOption4: {
            type: String,
        },
        movieOption1: {
            type: String,
        },
        movieOption2: {
            type: String,
        },
        movieOption3: {
            type: String,
        },
        movieOption4: {
            type: String,
        },
        //one to many relationship
        voteId: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vote'
        }]
    }
);

const Activity = mongoose.model('Activity', activitySchema);
module.exports = Activity;