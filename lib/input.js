const minimist = require('minimist')

function Input() {
    const args = minimist(process.argv.slice(2))
    this.command = this.parseInput(args);

}

Input.prototype.parseInput = function (args) {
    let possibleArgs = {
        a: 'add',
        add: 'add'
    }

    let allArgs = Object.keys(args);

    let keyOfArgs = allArgs.filter(arg => possibleArgs[arg])[0];

    return {
        action: possibleArgs[keyOfArgs], 
        payload: args[keyOfArgs]
    }
}

Input.prototype.valid = function() {
    if (this.command.action && this.command.payload && this.command.payload != true) {
        return true
    } return false
}

module.exports = Input;

