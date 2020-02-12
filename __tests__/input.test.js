const Input = require('../lib/input.js');

jest.mock('minimist');
const minimist = require('minimist');
//mock user having inputted node index.js -a 'this is a note'
minimist.mockImplementation(() => {
    return {
        a: 'this is a note'
    }
})

describe ('Input module', () => {
    //test parse input function
    it('parseInput() returns a property formatted object', () => {
        const opts = new Input();
        const command = opts.parseInput({a: 'this should pass'})
        expect(command.action).toBeDefined();
        expect(command.payload).toBeDefined();
    });

})