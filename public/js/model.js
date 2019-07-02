class Model {
    constructor(controller) {
        this.controller = controller;
     }

    saveNote(note){
        $.ajax({
            type: 'POST',
            contentType: "application/json",
            dataType: "json",
            url: "http://localhost:3000/note",
            data: JSON.stringify(note)
        });
    }

    updateNote(note){
        $.ajax({
            type: 'PUT',
            contentType: "application/json",
            dataType: "json",
            url: "http://localhost:3000/note",
            data: JSON.stringify(note)
        });
    }

    patchNote(note){
        $.ajax({
            type: 'PUT',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: "http://localhost:3000/note",
            data: JSON.stringify(note)
        });
    }

    getNotes(){
        $.ajax({
            type: 'GET',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: "http://localhost:3000/note",
            data: null,
            success: (notes) => {
                this.controller.getNotes_Callback(notes);
                this.notes = notes;
            }
        });

    }

    getNote(id){
        if(id !== null && id !== 'NEWITEM'){
            return this.notes.find( x => x._id === id);
        }
        $.ajax({
            type: 'GET',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: "http://localhost:3000/note",
            data: {id: id},
            success: (note) => {
                this.controller.getNote_Callback(note);
            }
        });
    }

    deleteNote(id){
        $.ajax({
            type: 'DELETE',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: "http://localhost:3000/note",
            data: JSON.stringify({id: id})
        });
    }


    sortByCreated = (notes, done) => notes.sort((a, b) => this.sortDesc(a.created, b.created)).filter(x => done === x.finished );
    sortByImportance = (notes, done) => notes.sort((a, b) => this.sortDesc(a.importance, b.importance)).filter(x => done === x.finished );
    sortByCompletedBy = (notes, done) => notes.sort((a, b) => this.sortAsc(a.completedBy, b.completedBy)).filter(x => done === x.finished );
    sortAsc = (a, b) => ((a < b) ? -1 : ((a > b) ? 1 : 0));
    sortDesc = (a, b) => ((a < b) ? 1 : ((a > b) ? -1 : 0));
}