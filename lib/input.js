const minimist = require('minimist')

// const rules = {
//     action: { required: true}, 
//     payload: {required: true},
// }

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

// Input.prototype.getAction = function (action = '') {
//     return (action === 'a') | (action === 'add') ? 'Please use -a or -add' : action;
// };

// Input.prototype.getPayload = function (payload = '') {
//     return (payload === '') ? 'Please add text' : payload; 
// };

Input.prototype.valid = function() {
    if (this.command.action && this.command.payload && this.command.payload != true) {
        return true
    } return false
}


// Input.prototype.valid = function() {
//     return Object.keys(rules).every((option) => {
//         return rules[option].required ? !!this[option] : true;
// });
// }


module.exports = Input;

