class ViewNoteForm {
    constructor() {
        // initialize  element events
        this.setNoteFormButtons();
    }

    setNoteFormButtons() {
        this.btnNoteSave = Helper.getEBI("#ed-btn-save-note");
        this.btnNoteCancel = Helper.getEBI("#ed-btn-cancel-note");
    }

    cancelEditDialog(event) {
        this.editDialog.style.display = "none";
        event.preventDefault();
    }

    getBtnSaveNote(){
        return this.btnNoteSave;
    }

    getBtnCancelNote() {
        return  this.btnNoteCancel;
    }

    getNoteData() {
        let note = this.collectNoteData();
        //todo: send to controller who sends it then to the controller in the server
        Helper.getEBI("#modal-form-edit").style.display = "none";
        return note;
    }

    collectNoteData() {
        let note = new Object();
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

    toggleColorStyle() {
            let link = this.cssLink;
            let href = link.href;
            this.cssLink.href = href.endsWith("blue.css") ? href.replace("blue", "green") : href.replace("green", "blue");
    }

    openEditNote() {

    }

    showNoteForm() {
        let mfe = Helper.getEBI("#modal-form-edit");

        mfe.style.display = "flex"; // muss mit hide gemacht sein.
    }
}