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
            required: 'Enter Food options'
        },
        foodOption2: {
            type: String,
            required: 'Enter Food options'
        },
        foodOption3: {
            type: String,
            required: 'Enter Food options'
        },
        foodOption4: {
            type: String,
            required: 'Enter Food options'
        },
        movieOption1: {
            type: String,
            required: 'Enter movie options'
        },
        movieOption2: {
            type: String,
            required: 'Enter movie options'
        },
        movieOption3: {
            type: String,
            required: 'Enter movie options'
        },
        movieOption4: {
            type: String,
            required: 'Enter movie options'
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