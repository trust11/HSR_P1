class Controller {
    constructor() {
        this.view = new View();
        this.model = new Model(this);
        this.getEmptyNote();
        this.updateNoteOverview();
        this.initEvents();
        this.initSortEvents();
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

    initSortEvents(){
        this.view.getBtnNoteSort().addEventListener("change", (event) => {
            event.preventDefault();
            this.updateNoteOverview();
            /*
            let noteId = event.target.dataset.noteId;
            switch (event.target.id) {
                case "rib-orderby-create-date":
                    this.deleteNote(noteId);
                    break;
                case "rib-orderby-importance":
                    this.editNote(noteId);
                    break;
                case "rib-orderby-completed-by-date":
                    this.finishNote(noteId);
                    break;
            }
            */
        });
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
        this.view.getNoteOverview().addEventListener("click", (event) => {
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
        let noteFiltered = this.Filter(notes);
        this.view.showNoteOverview(noteFiltered);
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
        let stateFinish = !this.model.getNote(id).finished;
        let note = {_id: id, finished: stateFinish};
        this.model.patchNote(note);
        this.updateNoteOverview();
    }

    Filter(notes) {
        if (this.view.rtnCompletedBy.checked) {
           return this.sortByCompletedBy(notes);
        }
        else if (this.view.rtnCreateDate.checked) {
            return this.sortByCreated(notes);
        }
        else if (this.view.rtnImportance.checked) {
            return this.sortByImportance(notes);
        }
    }

    sortByCompletedBy = notes => notes.sort((a, b) => this.sortAsc(a.completedBy, b.completedBy));
    sortByCreated = notes => notes.sort((a, b) => this.sortDesc(a.created, b.created));
    sortByImportance = notes => notes.sort((a, b) => this.sortDesc(a.importance, b.importance));
    sortDesc = (a, b) => ((a < b) ? 1 : ((a > b) ? -1 : 0));
    sortAsc = (a, b) => ((a < b) ? -1 : ((a > b) ? 1 : 0));
}