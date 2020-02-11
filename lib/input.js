const minimist = require('minimist')

const rules = {
    action: { required: true}, 
    payload: {required: true},
}

function Input() {
    const args = minimist(process.argv.slice(2))
    this.action = this.getAction(args.a) | this.getAction(args.add) ? 'add' : undefined;
    this.payload = this.getPayload(args.p);
}

Input.prototype.getAction = function (action = '') {
    return (action === 'a') | (action === 'add') ? 'Please use -a or -add' : action;
};

Input.prototype.getPayload = function (payload = '') {
    return (payload === '') ? 'Please add text' : payload; 
};


Input.prototype.valid = function() {
    return Object.keys(rules).every((option) => {
        return rules[option].required ? !!this[option] : true;
});
}


module.exports = Input;

