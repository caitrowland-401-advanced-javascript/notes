// const notes = {};

notes.add = function(opts) {
    if(opts) {
        // notes[ action = opts.action];
        // notes [ payload = opts.payload];
        console.log(notes[opts])
        console.log(`Action: ${opts.action}`)
        console.log(`Payload: ${opts.payload}`)
    }
    return this
}
const notes = {};

function Note(opts) {

    if(opts) {
        notes [action = opts.action];
        notes [payload = opts.payload]
    }
    return notes;
}

module.exports = notes;
