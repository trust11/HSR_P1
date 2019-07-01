class Model {
    notes = null;
    constructor(controller) {
        this.controller = controller;
        this.notes = null;
    }

    saveNote(note){
        $.ajax({
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: "http://localhost:3000/note",
            data: JSON.stringify(note),
            success: (json) => {
                //
            },
            error: (jqXHR, textStatus, errorThrown) => {
                /*  alert(textStatus);
                  alert(errorThrown.message);*/
            },
        });
    }

    updateNote(note){
        $.ajax({
            type: 'PUT',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: "http://localhost:3000/note",
            data: JSON.stringify(note),
            success: (json) => {
                //
            },
            error: (jqXHR, textStatus, errorThrown) => {
                /*  alert(textStatus);
                  alert(errorThrown.message);*/
            },
        });
    }

    patchNote(note){
        $.ajax({
            type: 'PUT',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: "http://localhost:3000/note",
            data: JSON.stringify(note),
            success: (json) => {
                //
            },
            error: (jqXHR, textStatus, errorThrown) => {
                /*  alert(textStatus);
                  alert(errorThrown.message);*/
            },
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
/*                alert('success' + JSON.stringify( notes));
                this.noteList = notes;
                () =>  callbackSuccess(notes);
*/
            },
            error: (jqXHR, textStatus, errorThrown) => {
                alert('nok');
            },
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
                /*
                                alert('success' + JSON.stringify( notes));
                                this.noteList = notes;
                                () =>  callbackSuccess(notes);
                */
            },
            error: (jqXHR, textStatus, errorThrown) => {
                alert('nok');
            },
        });
    }

    deleteNote(id){
        $.ajax({
            type: 'DELETE',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: "http://localhost:3000/note",
            data: JSON.stringify({id: id}),
            success: (note) => {

            },
            error: (jqXHR, textStatus, errorThrown) => {

            },
        });
    }
}