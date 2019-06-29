class ControllerNoteForm {
    constructor() {
        // initialize  element events
        this.viewNoteForm = new ViewNoteForm();
        this.model = new Model(this);

        this.initEvents();
/*
        this.initMainWindowElements();
        this.initEditDialogElements();
        this.registerMainWindowEvents();
        this.registerEditDialogEvents();
        this.modalFormEdit = Helper.getEBI("#modal-form-edit");
        this.editDialog = Helper.getEBI("#modal-form-edit")
        this.cssLink = Helper.getEBI("#colorStyle");*/
    }

    initEvents(){
        this.viewNoteForm.getBtnSaveNote().addEventListener("click", (event) => {
            this.saveNote();
        });
        this.viewNoteForm.getBtnCancelNote().addEventListener("click", (event) => {
            this.cancelNote();
        });
    }

    saveNote(){
        let note =  this.viewNoteForm.getNoteData();
        this.model.saveNote(note);
    }

    cancelNote() {
        this.viewNoteForm.cancelEditDialog()
    }

    getNote(){
        this.model.getNotes(this.getNotes_Callback);
    }

    getNotes_Callback(notes){
        this.view.showAllNotes(notes);
    }

    handleFiltering() {
        var gender = document.querySelector('input[name = "gender"]:checked').value;
    }

    saveEditDialog() {
        let json = this.view.getValuesOfEditDialogAsJson();
        //todo: send to controller who sends it then to the controller in the server

        let editDialog = Helper.getEBI("#modal-form-edit");
        // editDialog.save();
        editDialog.style.display = "none";
    }
}