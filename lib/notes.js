
// const mongoose = require('mongoose')
// const NotesDB = require('../models/notes-schema.js');

const Notesy = require('../models/notes-collection.js');

const note = new Notesy();

class Note {
    constructor () {
    }
    
    async execute(opt) {
        switch (opt.action) {
            case 'add' :
                return this.add(opt.payload, opt.category)
            case 'list' : 
                return this.get(opt.payload)
            case 'delete':
                return this.delete(opt.payload)
            default: 
                return Promise.resolve();
            }
        }

    async add(text, category) { 
        const newNote = ({
            text: text,
            category: category,
        })
        const saveNote = await note.create(newNote);
        return saveNote;
    }     

    async delete(id) {
        await note.delete(id);
        return console.log('DeletedNote ID:' , id)
    }


    async get(category) { 
        console.log('console log 1:', category)
        let searchDB = category ? {category} : {};
        const findNote = await note.get(searchDB);
        console.log('console 2:' ,searchDB.id)
        findNote.forEach (note => {
            console.log('console 3:' , searchDB.category)
            console.log(note.text);
            console.log (' ');
            console.log(`Category: ${ note.category}\t ID: ${note.id}`);
            console.log (' ');
        })
        return;
    }

}
    

module.exports = Note;