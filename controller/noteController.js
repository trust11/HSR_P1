const NoteStore = require('../services/noteStore');

class NoteController {
    constructor(){
        this.noteStore = new NoteStore();
    }

    async getNotes(req, res) {
        if(req.query.id != null){
            if(req.query.id === "NEWITEM" ){
                this.getNoteInstance(req, res);
            }else{
                this.getNote(req, res);
            }
        }else{
            res.json((await this.noteStore.all() || []));
        }
    };

    async createNote(req, res) {
        res.json(await this.noteStore.insert(req.body));
    };

    async updateNote(req, res) {
        let id = req.body._id;
        let note = req.body;
        res.json(await this.noteStore.update(id, note));
    };

    async getNote(req, res) {
        res.json(await this.noteStore.get(req.query.id));
    };

    async getNoteInstance(req, res) {
        res.json(await this.noteStore.getNoteInstance());
    }

    async deleteNote(req, res) {
        res.json(await this.noteStore.delete(req.params.id));
    };
}

module.exports = new NoteController();