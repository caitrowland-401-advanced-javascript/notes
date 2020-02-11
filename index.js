const Input = require('./lib/input.js');
const Note= require('./lib/notes.js');

const options = new Input();
options.valid() ? Note.fetch(options) : help();

function help() {
    console.log('heeeelp meeeeee');
    process.exit();
}