//files we will be using 
const Input = require('./lib/input.js');
const Note= require('./lib/notes.js');

const input = new Input();
const notes = new Note(input);

// If valid input, addnote, otherwise send help message
// if (input.valid()) {
//     notes.execute();
// } else {
//     help()
// }

input.valid() ? notes.execute() : help()


// Help message
function help() {
    console.log('heeeelp meeeeee');
    process.exit();
}