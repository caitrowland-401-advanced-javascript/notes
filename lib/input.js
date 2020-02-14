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
            d: 'delete',
            delete: 'delete',
            l: 'list',
            list: 'list'
        }
    
        let inputArg = Object.keys(args).filter(arg => possibleArgs[arg])[0];
    
        // let keyOfArgs = allArgs.filter(arg => possibleArgs[arg])[0];

    
        return {
            action: possibleArgs[inputArg], 
            payload: typeof args[inputArg] === 'string' ? args[inputArg] : undefined,
            category: args.category || args.c,
        }
    }

    valid() {
        let schema = {
            action: { type: 'string', required: true }, 
        }
        let validator = new Validator(schema);
        return validator.isValid(this.command);
    }
}



module.exports = Input;

