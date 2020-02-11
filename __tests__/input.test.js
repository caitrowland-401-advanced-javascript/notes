const Input = require('../lib/input.js');

jest.mock('minimist');
//mock user having inputted node index.js -a 'this is a note'
minimist.mockImplementation(() => {
    return {
        a: 'this is a note'
    }
})

describe ('Input module', () => {
    //test parse input function

    //test valid function
    it('valid() respects a properly formatted input', () => {
        const opts = new Input()
        expect(opts.valid()).toBeTruthy();
    })
})