class ControllerNoteForm {
    constructor() {
        // initialize  element events
        this.viewNoteForm = new ViewNoteForm();
        this.model = new Model(this);
        this.note = null;
        this.getNote();
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
             event.preventDefault();
             this.saveNote();
        });

        this.viewNoteForm.getBtnCancelNote().addEventListener("click", (event) => {
            event.preventDefault();
            this.cancelNote();
        });
    }

    cancelNote() {
        this.viewNoteForm.cancleEditDialog();
    }

    saveNote(){
        let tempNote = this.note.deepCopy();
        let note =  this.viewNoteForm.getNoteData(tempNote);
        this.model.saveNote(note);
    }

    getNote(){ //empty note
        this.model.getNote("");
    }
    getNote_Callback(note){
        this.note = note;
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