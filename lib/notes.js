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
                return this.newAdd(opt.payload, opt.category)
            case 'list' : 
                return this.newList(opt.payload)
            case 'delete':
                return this.newDelete(opt.payload)
            default: 
                return Promise.resolve();
            }
        }

    async newAdd(text, category) { 
        const newNote = ({
            text: text,
            category: category,
        })
        const saveNote = await note.create(newNote);
        return saveNote;
    }     
        
    // async add(text, category) {
    //     const newNote = new NotesDB ({
    //         text: text,
    //         category: category,
    //     });
    //     const savedNote = await newNote.save();
    //     console.log('new note:', savedNote.text);
    //     return savedNote;
    // }

    async newDelete(id) {
        await note.findByIdAndDelete(id);
        return console.log('DeletedNote ID:' , id)
    }

    // async delete(id) {
    //     await NotesDB.findByIdAndDelete(id);
    //     return console.log('Deleted Note ID:' , id)
    // }

    async newList(category) { 
        let searchDB = category ? {category} : {};
        const findNote = await note.get(searchDB.id);
        findNote.forEach (note => {
            console.log(note.text);
            console.log (' ');
            console.log(`Category: ${ note.category}\t ID: ${note.id}`);
            console.log (' ');
        })
        return;
    }

//     async list(category) { 
//         const searchDB = category ? {category} : {};
//         const foundNotes = await NotesDB.find(searchDB);
//         foundNotes.forEach (note => {
//             console.log(note.text);
//             console.log (' ');
//             console.log(`Category: ${ note.category}\t ID: ${note.id}`);
//             console.log (' ');
//         })
//         return;
//     }
}
    

module.exports = Note;