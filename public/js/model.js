class Model {

    constructor(controller) {
        this.controller = controller;
        this.noteList = null;
    }

    saveNote(note){
        $.ajax({
            type: 'post',
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
            type: 'get',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: "http://localhost:3000/note",
            data: null,
            success: (notes) => {
                this.controller.getNotes_Callback(notes);
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

    getNote(id){
        $.ajax({
            type: 'get',
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
}