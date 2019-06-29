class Controller {
    constructor() {
        // initialize  element events
        this.view = new View();
        this.model = new Model(this);
        this.noteForm = new ControllerNoteForm();

        this.initEvents();
        this.getNotes();
 /*         this.initMainWindowElements();
        this.initEditDialogElements();
        this.registerMainWindowEvents();
        this.registerEditDialogEvents();
        this.modalFormEdit = Helper.getEBI("#modal-form-edit");
        this.editDialog = Helper.getEBI("#modal-form-edit")
        this.cssLink = Helper.getEBI("#colorStyle");*/
    }

    initEvents(){
        this.view.getBtnNewNote().addEventListener("click", (event) => {
            this.openNewNoteWindow();
        });
    }

    openNewNoteWindow() {

        this.view.showNoteForm();
    }

    saveNote(){
        let note =  this.view.getNote();
        this.model.saveNote(note);
    }

    getNotes(){
        this.model.getNotes(this.getNotes_Callback);
    }

    getNote() {
        this.model.getNote(id);
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