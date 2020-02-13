const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
    text: {type: String},
    category: {type: String },

})

module.exports = mongoose.model('notes' , notesSchema)