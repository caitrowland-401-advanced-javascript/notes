const Note = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

// test for execute ()
describe ('Notes module', () => {
    it('execute() does nothing when the options are invalid', () => {
        const commandWillFail = {command: {'x' : 'coconut'}};
        const notes = new Note(commandWillFail);
        notes.execute();
        expect(console.log).not.toHaveBeenCalled;
    })
    
//test for add ()
    it('Note.prototype.add() can add a note', () => {
    
        const action = 'add';
        const payload = ' this will succeed'
        const notes = new Note({command: {action, payload}})
        notes.execute();
        expect(console.log).toHaveBeenCalledWith(`adding note: ${payload}`);
    })
})


