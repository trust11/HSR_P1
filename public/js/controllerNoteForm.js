class ControllerNoteForm {
    constructor() {
        this.viewNoteForm = new ViewNoteForm();
        this.model = new Model(this);
        this.note = null;
        this.getEmptyNote();
        this.initEventsNoteForm();
    }

    initEventsNoteForm(){
        this.viewNoteForm.getBtnSaveNote().addEventListener("click", (event) => {
             event.preventDefault();
             this.saveNoteForm();
        });

        this.viewNoteForm.getBtnCancelNote().addEventListener("click", (event) => {
            event.preventDefault();
            this.cancelNoteForm();
        });
    }

    cancelNoteForm() {
        this.viewNoteForm.cancelEditDialog();
    }

    saveNoteForm(){
        let tempNote = Object.assign({},this.note);
        let note =  this.viewNoteForm.getNoteData(tempNote);
        this.model.saveNote(note);
    }

    getEmptyNote(){ //empty note
        this.model.getNote("NEWITEM");
    }
    getNote_Callback(note){
        this.note = note;
    }

}