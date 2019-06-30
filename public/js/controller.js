class Controller {
    note;
    constructor() {
        // initialize  element events
        this.view = new View();
        this.model = new Model(this);
        //this.note = null;
        this.getEmptyNote();
        this.initEvents();
        this.initEventsNoteForm();
        this.updateNoteOverview();
    }

    initEvents(){
        this.view.getBtnNewNote().addEventListener("click", (event) => {
            this.openNewNoteWindow();
            event.preventDefault();
        });

        this.view.getBtnChooseTheme().onchange = (event) => {
            this.toggleColorStyle();
            event.preventDefault();
        }
    }

    initEventsNoteForm(){
        this.view.getBtnSaveNote().addEventListener("click", (event) => {
            event.preventDefault();
            this.saveNoteForm();
        });

        this.view.getBtnCancelNote().addEventListener("click", (event) => {
            event.preventDefault();
            this.cancelNoteForm();
        });
    }

    toggleColorStyle(){
        this.view.toggleColorStyle();
    }

    openNewNoteWindow() {
        this.view.showNoteForm();
    }

    updateNoteOverview(){
        this.model.getNotes(this.getNotes_Callback);
    }

    getNotes_Callback(notes){
        this.view.showNoteOverview(notes);
    }

    cancelNoteForm() {
        this.view.cancelNoteForm();
    }

    saveNoteForm(){
        let tempNote = Object.assign({},this.note);
        let note =  this.view.getNoteData(tempNote);
        this.model.saveNote(note);
        this.updateNoteOverview();
    }

    getEmptyNote(){ //empty note
        this.model.getNote("NEWITEM");
    }
    getNote_Callback(note){
        this.note = note;
    }
}