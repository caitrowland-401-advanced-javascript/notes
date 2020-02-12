const minimist = require('minimist')
const Validator = require('./validator.js')
const mongoose = require('mongoose')
const NotesDB = require('../models/notes-schema.js');

class Input {

    constructor() {
    let args = minimist(process.argv.slice(2))
    this.command = this.parseInput(args);
    }

    parseInput(args) {
        let possibleArgs = {
            a: 'add',
            add: 'add'
        }
    
        let allArgs = Object.keys(args);
    
        let keyOfArgs = allArgs.filter(arg => possibleArgs[arg])[0];
    
        return {
            action: possibleArgs[keyOfArgs], 
            payload: args[keyOfArgs]
        }
    }

    valid() {
        const schema = {
            action: { type: 'string', required: true }, 
            payload: { type: 'string', required: true }
        }
        const validator = new Validator(schema);
        return validator.validate(this.command);
    }
}

const MONGOOSE_URL = 'mongodb://localhost:27017';
mongoose.connect(MONGOOSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const saveToDatabase = async () => {
    let notes = new NotesDB ({
        category: 'add', 
        text: 'here is a new note'
    })
    await notes.save();
    console.log('notes:', notes);

    const allNotes = await NotesDB.find({})
    console.log(allNotes);

    mongoose.disconnect();
}

saveToDatabase();

module.exports = Input;

