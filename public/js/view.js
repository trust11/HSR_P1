class View {
    cssLink;

    constructor() {
        // initialize  element events
        this.setMainFormElements();
        this.cssLink = Helper.getEBI("#colorStyle");
    }

    getBtnNewNote = () => this.btnNewNote;
    getBtnChooseTheme = () => this.btnChooseTheme;

    getNoteForm = () => Helper.getEBI(`#modal-form-edit`);
    getNoteOverview = () => Helper.getEBI("#note-overview");
    getNoteOverviewTemplateContent = () => Helper.getEBI("#note-overview-template").innerHTML;

    showNoteOverview = notes => {
        let template = Handlebars.compile(this.getNoteOverviewTemplateContent());
        this.getNoteOverview().innerHTML = template(notes);
    };

    setMainFormElements = () => {
        this.btnNewNote = Helper.getEBI("#btn-create-new-note");
        this.btnChooseTheme = Helper.getEBI("#btn-choose-theme");
        this.rtnFinished = Helper.getEBI("#rib-orderby-finish-date");
        this.rtnCreateDate = Helper.getEBI("#rib-orderby-create-date");
        this.rtnImportance = Helper.getEBI("#rib-orderby-importance");
    };

    toggleColorStyle = () => {
        let link = this.cssLink;
        let href = link.href;
        this.cssLink.href = href.endsWith("blue.css") ? href.replace("blue", "green") : href.replace("green", "blue");
    };

    showNoteForm = () => {
      this.getNoteForm().style.display = "flex"; // muss mit hide gemacht sein.
      Helper.getEBI("#ed-btn-reset-note").click();
    };


}