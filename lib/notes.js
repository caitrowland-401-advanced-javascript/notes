const mongoose = require('mongoose')
const NotesDB = require('../models/notes-schema.js');


class Note {
    constructor (opts) {
        this.action = opts.command.action;
        this.payload = opts.command.payload;
        this.category = opts.command.category;
 
    }
    
    async execute() {
        switch (this.action) {
            case 'add' :
                this.add(this.payload, this.category)
                break;
                default: break;
            }
            console.log('schema:', schema)
        }
        
        async add () {
            // let newNote = {category, text};
            // let notes = new NotesDB(newNote);
            // let saveNote = await notes.save();
            // return saveNote;
            saveToDatabase()
        }

        valid() {
            const schema = {
                action: { type: 'string', required: true }, 
                payload: { type: 'string', required: true },
                category: { type: 'string'}
            }
            console.log ('schema:', schema)
            const validator = new Validator(schema);
            return validator.validate(this);
        }
    
}


const saveToDatabase = async () => {
    let notes = new NotesDB ({
        category: this.category,
        text: this.payload
    })
    await notes.save();
    console.log('notes:', notes);

    const allNotes = await NotesDB.find({})
    console.log(allNotes);

    mongoose.disconnect();
}

module.exports = Note;