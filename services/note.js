class Note {
    constructor() {
        this.title = "";
        this.description = "";
        this.importance = "3";
        this.created = null;
        this.completedBy = null;
        this.changedAt = null;
        this.finished = false;
    }
}

module.exports = Note;