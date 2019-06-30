class ViewNoteForm {
    constructor() {
        // initialize  element events
        this.setNoteFormButtons();
    }

    setNoteFormButtons() {
        this.btnNoteSave = Helper.getEBI("#ed-btn-save-note");
        this.btnNoteCancel = Helper.getEBI("#ed-btn-cancel-note");
    }

    getBtnSaveNote(){
        return this.btnNoteSave;
    }

    getBtnCancelNote() {
        return  this.btnNoteCancel;
    }

    cancelEditDialog(){
        Helper.getEBI("#modal-form-edit").style.display = "none";
    }

    getNoteData(note) {
        let newNote = this.collectNoteData(note);
        this.cancelEditDialog();
        return newNote;
    }

    collectNoteData(note) {
        note.title = Helper.getEBI("#note-title-field").value;
        note.description = Helper.getEBI("#note-description-field").value;
        note.importance = Helper.getEBI("#note-importance-indicator").value;
        note.completedBy = Helper.getEBI("#note-date-field").value;
        note.changedAt = new Date().toISOString().replace('T',' ').split('.')[0];

        if(note.created === null) {
            note.created = note.changedAt;
        }
        return note;
    }

    openNewNote() {
        let mfe = Helper.getEBI("#modal-form-edit");
        mfe.style.display = "flex";
        Helper.getEBI("#ed-btn-reset-note").click();
    }
}