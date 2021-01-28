
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieOptionsSchema = new Schema({


    title: { type: String },
    image: { type: String },
    link: { type: String },


});

module.exports = mongoose.model('MovieOptions', movieOptionsSchema);