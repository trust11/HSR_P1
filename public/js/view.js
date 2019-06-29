class View {
    constructor() {
        // initialize  element events
        this.setMainFormElements();
        this.cssLink = Helper.getEBI("#colorStyle");


/*
        this.initMainWindowElements();
        this.initEditDialogElements();
        this.registerMainWindowEvents();
        this.registerEditDialogEvents();
        this.modalFormEdit = Helper.getEBI("#modal-form-edit");
        this.editDialog = Helper.getEBI("#modal-form-edit")
        */

    }

    getBtnNewNote(){
        return this.btnNewNote;
    }

    getBtnChooseTheme(){
        return this.btnChooseTheme;
    }

    getNoteForm(){
        return Helper.getEBI("#modal-form-edit");
    }

    showAllNotes(notes){
        alert('On View' + JSON.stringify(notes));
    }

    setMainFormElements() {
        this.btnNewNote = Helper.getEBI("#btn-create-new-note");
        this.btnChooseTheme = Helper.getEBI("#btn-choose-theme");
        this.rtnFinished = Helper.getEBI("#rib-orderby-finish-date");
        this.rtnCreateDate = Helper.getEBI("#rib-orderby-create-date");
        this.rtnImportance = Helper.getEBI("#rib-orderby-importance");
    }

    openNewNote() {
        let mfe = Helper.getEBI("#modal-form-edit");
        mfe.style.display = "flex";
        Helper.getEBI("#ed-btn-reset-note").click();
    }

    toggleColorStyle() {
        let link = this.cssLink;
        let href = link.href;
        this.cssLink.href = href.endsWith("blue.css") ? href.replace("blue", "green") : href.replace("green", "blue");
    }

    showNoteForm = () => {
       // let mfe = Helper.getEBI("#modal-form-edit");
      this.getNoteForm().style.display = "flex"; // muss mit hide gemacht sein.
    };
}