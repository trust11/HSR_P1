class ControllerNoteForm {
    constructor() {
        // initialize  element events
        this.viewNoteForm = new ViewNoteForm();
        this.model = new Model(this);
        this.note = null;
        this.getNote();
        this.initEvents();
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
        this.viewNoteForm.cancelEditDialog();
    }

    saveNote(){
        let tempNote = Object.assign({},this.note);
        let note =  this.viewNoteForm.getNoteData(tempNote);
        this.model.saveNote(note);
    }

    getNote(){ //empty note
        this.model.getNote("NEWITEM");
    }
    getNote_Callback(note){
        this.note = note;
    }

    handleFiltering() {
        var gender = document.querySelector('input[name = "gender"]:checked').value;
    }
}