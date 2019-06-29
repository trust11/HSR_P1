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

    cancleEditDialog(){
        Helper.getEBI("#modal-form-edit").style.display = "none";
    }

    getNoteData(note) {
        let newNote = this.collectNoteData(note);
        this.cancleEditDialog();
        return newNote;
    }

    collectNoteData(note) {
        note.title = Helper.getEBI("#note-title-field").value;
        note.description = Helper.getEBI("#note-description-field").value;
        note.importance = Helper.getEBI("#note-importance-indicator").value;
        note.date = Helper.getEBI("#note-date-field").value;
        return note;
    }

    openNewNote() {
        let mfe = Helper.getEBI("#modal-form-edit");
        mfe.style.display = "flex";
        Helper.getEBI("#ed-btn-reset-note").click();
    }

    openEditNote() {

    }

    showNoteForm() {
        let mfe = Helper.getEBI("#modal-form-edit");

        mfe.style.display = "flex"; // muss mit hide gemacht sein.
    }
}