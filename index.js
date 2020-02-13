//files we will be using 
const Input = require('./lib/input.js');
const Note= require('./lib/notes.js');
const mongoose = require('mongoose');

const input = new Input();
const notes = new Note(input);




const NotesDB = require('./models/notes-schema.js');


const MONGOOSE_URL = 'mongodb://localhost:27017';
mongoose.connect(MONGOOSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

input.valid() ? notes.execute(NotesDB).then(data => {mongoose.disconnect()}).catch(err => console.error(err)) : help()

// Help message
function help() {
    console.log(notes)
    console.log('Please provide valid command in the form of -a or -add "your new note here" -category categoryName');
    process.exit();
}