//files we will be using 
const mongoose = require('mongoose');
// const NotesDB = require('./models/notes-schema.js');


///Connect to mongoose
const MONGOOSE_URI = 'mongodb://localhost:27017';
mongoose.connect(MONGOOSE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const Input = require('./lib/input.js');
const Note = require('./lib/notes.js');

const input = new Input();
const notes = new Note();

if (input.valid()) {
    notes.execute(input.command)
    .then(mongoose.disconnect)
    .catch(error => console.error(error))
} else {
    help();
}

// input.valid() ? notes.execute(input.command).then(mongoose.disconnect()) : help();

// Help message
function help() {
    console.log('HEEEELPPPP MEEEEEEE');
    process.exit();
}