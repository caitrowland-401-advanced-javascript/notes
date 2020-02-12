//files we will be using 
const Input = require('./lib/input.js');
const Note= require('./lib/notes.js');
const input = new Input();
const notes = new Note(input);


input.valid() ? notes.execute() : help()




// Help message
function help() {
    console.log('Please provide valid command in the form of -a or -add "your new note here"');
    process.exit();
}