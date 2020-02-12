const Input = require('../lib/input.js');
const Validator = require('../lib/validator.js');

jest.mock('minimist');
const minimist = require('minimist');
//mock user having inputted node index.js -a 'this is a note'
minimist.mockImplementation(() => {
    return {
        a: 'this is a note'
    }
})

describe ('Validator module', () => {
    //test parse input function

    //test valid function
    it('valid() respects a properly formatted input', () => {
        const opts = new Input()
        expect(opts.valid()).toBeTruthy();
    });

    it('valid() rejects improperly formatted input', () => {
        let opts = new Input();
        opts.command = {};
        expect(opts.valid()).toBeFalsy();
    });
    
    it('valid() rejects an invalid object', () => {
        let opts = new Input();
        opts.command = 'this is not a object';
        expect(opts.valid()).toBeFalsy();
    })

    it('valid() rejects has a invalid payload', () => {
        let opts = new Input();
        opts.command = {a: undefined}
        expect(opts.valid()).toBeFalsy();
    })

    it('valid() rejects has a invalid action', () => {
        let opts = new Input();
        opts.command = {p: 'missing action'}
        expect(opts.valid()).toBeFalsy();
    })

    it('valid() rejects has a invalid payload type', () => {
        let opts = new Input();
        opts.command = {p: 2}
        expect(opts.valid()).toBeFalsy();
    })
})