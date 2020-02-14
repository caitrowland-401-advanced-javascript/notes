// const mongoose = require('mongoose')
const NotesDB = require('../models/notes-schema.js');

class Note {
    constructor () {
    }
    
    async execute(opt) {
        console.log('we are in execute')
        switch (opt.action) {
            case 'add' :
                console.log('we are adding')
                return this.add(opt.payload, opt.category)
            case 'list' : 
                return this.list(opt.payload)
            case 'delete':
                return this.delete(opt.payload)
            default: 
                return Promise.resolve();
            }
        }
        
    async add(text, category) {
        const newNote = new NotesDB ({
            text: text,
            category: category,
        });
        const savedNote = await newNote.save();
        console.log('new note:', savedNote.text);
        return savedNote;
    }

    async delete(id) {
        await NotesDB.findByIdAndDelete(id);
        return console.log('Deleted Note ID:' , id)
    }

    async list(category) { 
        const searchDB = category ? {category} : {};
        const foundNotes = await NotesDB.find(searchDB);
        foundNotes.forEach (note => {
            console.log(note.text);
            console.log (' ');
            console.log(`Category: ${ note.category}\t ID: ${note.id}`);
            console.log (' ');
        })
        return;
    }
}
    

module.exports = Note;