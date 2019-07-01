class View {
    cssLink;
    tempNote; //used for edit mode
    constructor() {
        this.cssLink = Helper.getEBI("#colorStyle");
        this.setMainFormElements();
        this.setNoteFormButtons();
    }

    getBtnNewNote = () => this.btnNewNote;
    getBtnChooseTheme = () => this.btnChooseTheme;
    getBtnSaveNote = () => this.btnNoteSave;
    getBtnCancelNote = () => this.btnNoteCancel;


    getNoteForm = () => Helper.getEBI(`#modal-form-edit`);
    getNoteOverview = () => Helper.getEBI("#note-overview");
    getNoteOverviewTemplateContent = () => Helper.getEBI("#note-overview-template");
    getTileElement = () => Helper.getEBI("#note-overview");

    showNoteOverview = notes => {
        let template = Handlebars.compile(this.getNoteOverviewTemplateContent().innerHTML);
        this.getNoteOverview().innerHTML = template(notes);
    };

    setMainFormElements = () => {
        this.btnNewNote = Helper.getEBI("#btn-create-new-note");
        this.btnChooseTheme = Helper.getEBI("#btn-choose-theme");
        this.rtnFinished = Helper.getEBI("#rib-orderby-finish-date");
        this.rtnCreateDate = Helper.getEBI("#rib-orderby-create-date");
        this.rtnImportance = Helper.getEBI("#rib-orderby-importance");
    };

    setNoteFormButtons = () => {
        this.btnNoteSave = Helper.getEBI("#ed-btn-save-note");
        this.btnNoteCancel = Helper.getEBI("#ed-btn-cancel-note");
    };

    toggleColorStyle = () => {
        let link = this.cssLink;
        let href = link.href;
        this.cssLink.href = href.endsWith("blue.css") ? href.replace("blue", "green") : href.replace("green", "blue");
    };

    showNoteForm = (note) => {
      this.tempNote = note;
      Helper.getEBI("#ed-btn-reset-note").click();
      this.setNoteData(this.tempNote);
      this.getNoteForm().style.display = "flex"; // muss mit hide gemacht sein.
    };

    cancelNoteForm = () => this.closeNoteForm();
    closeNoteForm = ()=> Helper.getEBI("#modal-form-edit").style.display = "none";

    getNoteData = note => {
        if(this.tempNote){note = this.tempNote;}
        let newNote = this.collectNoteData(note);
        this.closeNoteForm();
        return newNote;
    };

    setNoteData = note => {
        if(note !== null){
            Helper.getEBI("#note-title-field").value = note.title;
            Helper.getEBI("#note-description-field").value = note.description;
            Helper.getEBI("#note-importance-indicator").value = note.importance;
            Helper.getEBI("#note-date-field").value = note.completedBy;
        }
    };

    collectNoteData = note => {
        note.title = Helper.getEBI("#note-title-field").value;
        note.description = Helper.getEBI("#note-description-field").value;
        note.importance = Helper.getEBI("#note-importance-indicator").value;
        note.completedBy = Helper.getEBI("#note-date-field").value;
        note.changedAt = new Date().toISOString().replace('T',' ').split('.')[0];

        if(note.created === null) {
            note.created = note.changedAt;
        }
        return note;
    };
}