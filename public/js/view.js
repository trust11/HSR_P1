class View {
    cssLink;
    tempNote; //used for edit mode
    constructor() {
        this.cssLink = $("#colorStyle")[0];
        this.setMainFormElements();
        this.setDialogFormButtons();
    }

    getBtnNewNote = () => this.btnNewNote;
    getBtnChooseTheme = () => this.btnChooseTheme;
    getBtnNoteSort= () => this.btnNoteSort;
    getBtnSaveNote = () => this.btnDialogNoteSave;
    getBtnCancelNote = () => this.btnDialogNoteCancel;
    getNoteForm = () => $("#dialog-edit-note-container")[0];
    getNoteOverview = () => $("#note-overview")[0];
    getNoteOverviewTemplateContent = () => $("#note-overview-template")[0];

    cancelNoteForm = () => this.closeNoteForm();

    closeNoteForm = ()=> this.getNoteForm().style.display = "none";

    showNoteForm = (note) => {
        this.tempNote = note;
        this.btnNoteReset.click();
        this.setNoteData(this.tempNote);
        this.getNoteForm().style.display = "flex"; // muss mit hide gemacht sein.
    };

    showNoteOverview = notes => {
        let template = Handlebars.compile(this.getNoteOverviewTemplateContent().innerHTML);
        this.getNoteOverview().innerHTML = template(notes);
    };

    setMainFormElements = () => {
        this.btnNewNote = $("#btn-create-new-note")[0];
        this.btnChooseTheme = $("#btn-choose-theme")[0];
        this.btnNoteSort = $("#btn-note-sort")[0];
        this.rtnCompletedBy = $("#rib-orderby-completed-by-date")[0];
        this.rtnCreateDate = $("#rib-orderby-create-date")[0];
        this.rtnImportance = $("#rib-orderby-importance")[0];
        this.chkDone = $("#btn-show-done")[0];
    };

    setDialogFormButtons = () => {
        this.btnDialogNoteSave = $("#dialog-ed-btn-save-note")[0];
        this.btnDialogNoteCancel = $("#dialog-ed-btn-cancel-note")[0];
        this.btnNoteReset = $("#dialog-ed-btn-reset-note")[0];
    };

    getNoteData = note => {
        if(this.tempNote){note = this.tempNote;}
        let newNote = this.getNoteDataFormInputElements(note);
        this.closeNoteForm();
        return newNote;
    };

    getNoteDataFormInputElements = note => {
        note.title = $("#dialog-note-title-field")[0].value;
        note.description = $("#dialog-note-description-field")[0].value;
        note.importance = $("#dialog-note-importance-indicator")[0].value;
        note.completedBy = $("#dialog-note-date-field")[0].value;
        note.changedAt = Helper.getDateTime();
        if(note.created === null) {
            note.created = note.changedAt;
        }
        return note;
    };

    setNoteData = note => {
        if(note !== null){
            $("#dialog-note-title-field")[0].value = note.title;
            $("#dialog-note-description-field")[0].value = note.description;
            $("#dialog-note-importance-indicator")[0].value = note.importance;
            $("#dialog-note-date-field")[0].value = note.completedBy || Helper.getDateTime().split(' ')[0];
        }
    };
    toggleColorStyle = () => {
        let link = this.cssLink;
        let href = link.href;
        this.cssLink.href = href.endsWith("blue.css") ? href.replace("blue", "green") : href.replace("green", "blue");
    };
}