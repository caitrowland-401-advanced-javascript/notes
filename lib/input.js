const minimist = require('minimist')
const Validator = require('./validator.js')

class Input {

    constructor() {
    let args = minimist(process.argv.slice(2))
    this.command = this.parseInput(args);
    }

    parseInput(args) {
        let possibleArgs = {
            a: 'add',
            add: 'add',
            category: 'category',
            c: 'category'
        }
    
        let allArgs = Object.keys(args);
    
        let keyOfArgs = allArgs.filter(arg => possibleArgs[arg])[0];

    
        return {
            action: possibleArgs[keyOfArgs], 
            payload: args[keyOfArgs],
            category: args.category || args.c
        }
    }

    valid() {
        const schema = {
            action: { type: 'string', required: true }, 
            payload: { type: 'string', required: true },
            // category: { type: 'string'}
        }
        // const validator = new Validator(schema);
        // return validator.validate(this);
    }
}



module.exports = Input;

