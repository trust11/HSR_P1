class Controller {
    constructor() {
        this.view = new View();
        this.model = new Model(this);

        this.getEmptyNote();
        this.updateNoteOverview();
        this.initEvents();
        this.initEventsNoteForm();
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

    initEventsNoteOverviewTile(){
        this.view.getTileElement().addEventListener("click", (event) => {
            event.preventDefault();
            let noteId = event.target.dataset.noteId;
           switch (event.target.id) {
               case "note-tile-delete":
                   this.deleteNote(noteId);
                   break;
               case "note-tile-edit":
                   this.editNote(noteId);
                   break;
               case "note-tile-finish":
                   this.finishNote(noteId);
                   break;
           }
        });
    }

    toggleColorStyle(){
        this.view.toggleColorStyle();
    }

    openNewNoteWindow() {
        this.view.showNoteForm(this.getEmptyNote());
    }

    updateNoteOverview(){
        this.model.getNotes(this.getNotes_Callback);
    }

    getNotes_Callback(notes){
        this.view.showNoteOverview(notes);
        this.initEventsNoteOverviewTile();
    }

    cancelNoteForm() {
        this.view.cancelNoteForm();
    }

    saveNoteForm(){
        let tempNote = this.getEmptyNote();
        let note =  this.view.getNoteData(tempNote);
        note._id === undefined ? this.model.saveNote(note) : this.model.updateNote(note);
        this.updateNoteOverview();
    }

    getEmptyNote(){ //empty note
        if(this.note === undefined ){
            return this.model.getNote("NEWITEM");
        }else{
            return Object.assign({},this.note);
        }
    }
    getNote_Callback(note){
        this.note = note;
    }

    editNote(id) {
        let json = this.model.getNote(id);
        this.view.showNoteForm(json);
    }

    deleteNote(id) {
        this.model.deleteNote(id);
        this.updateNoteOverview();
    }

    finishNote(id) {

    }

}