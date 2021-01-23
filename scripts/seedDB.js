
const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/reactactivities'
);


const activitySeed = [
    {
        name: 'lets eat some yummy food and watch a movie tonight',
        description: 'pick one among these movies and food choices',
        foodOption1: 'Chilis',
        foodOption2: 'Chick-fil-A',
        foodOption3: 'In and Out Burger',
        foodOption4: 'Chipotle',
        movieOption1: 'Avengers',
        movieOption2: 'Rise of the Guardians',
        movieOption3: 'Dark Knight',
        movieOption4: 'AI'
    }
];


db.Activity.remove({})
    .then(() => db.Activity.collection.insertMany(activitySeed))
    .then(data => {
        console.log(data.result.n + ' records inserted!');
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });