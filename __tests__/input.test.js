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
    })

    //test valid function
    it('valid() respects a properly formatted input', () => {
        const opts = new Input()
        expect(opts.valid()).toBeTruthy();
    })
    it('valid() rejects improoperty formatted input', () => {
        let opts = new Input();
        opts.command = {};
        expect(opts.valid()).toBeFalsy();
    })
})