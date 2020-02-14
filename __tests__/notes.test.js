const Note = require('../lib/notes.js');
const notes = new notes();

jest.spyOn(notes, 'add');

// test for execute ()
describe ('Notes module', () => {
    it('execute() does nothing when the options are invalid', () => {
        notes.execute({})
        .then(() => {
            expect(notes.add).not.toHaveBeenCalled
        })
        // const commandWillFail = {command: {}};
        // const notes = new Note(commandWillFail);
        // notes.execute();
        // expect(console.log).not.toHaveBeenCalled;
    })
    
//test for add ()
    it('Note.prototype.add() can add a note', () => {
    
        // const action = 'add';
        // const payload = ' this will succeed'
        notes.execute({ action: 'add' , payload: 'payload'})
        .then( () => {
            expect(notes.add).toHaveBeenCalled
        })
        // const notes = new Note({command: {action, payload}})
        // notes.execute();
        // expect(console.log).toHaveBeenCalledWith(`adding note: ${payload}`);
    })
})


