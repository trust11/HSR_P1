class Note {
    constructor() {
        this.title = null;
        this.description = null;
        this.stateActive = true;
        this.importance = 3;
        this.created = new Date().toLocaleString();
        this.completedBy = this.created.split(',')[0];
        this.finished = false;
    }
}

module.exports = Note;