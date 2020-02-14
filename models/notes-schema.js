const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
    text: {
        type: String, 
        required: true
    },
    category: {
        type: String, 
        required: false, 
        default: 'uncategorized'
    },
})

module.exports = mongoose.model('notes' , notesSchema);