const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodOptionsSchema = new Schema({

    name: { type: String },
    image: { type: String },
    link: { type: String },
    menu: { type: String },

});

module.exports = mongoose.model('FoodOptions', foodOptionsSchema);