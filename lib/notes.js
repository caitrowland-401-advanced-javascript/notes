class Note {
    constructor (opts) {
        this.action = opts.command.action;
        this.payload = opts.command.payload;
 
    }
    
    execute() {
        switch (this.action) {
            case 'add' :
                this.add(this.payload)
                break;
                default: break;
            }
        }
        
        add () {
            console.log(`adding note: ${this.payload}`)
        }
}

module.exports = Note;