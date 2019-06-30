class Controller {
    constructor() {
        // initialize  element events
        this.view = new View();
        this.model = new Model(this);
        this.noteForm = new ControllerNoteForm(this);

        this.initEvents();
        this.getNotes();
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

    toggleColorStyle(){
        this.view.toggleColorStyle();
    }

    openNewNoteWindow() {
        this.view.showNoteForm();
    }

    getNotes(){
        this.model.getNotes(this.getNotes_Callback);
    }

    getNotes_Callback(notes){
        this.view.showNoteOverview(notes);
    }
}