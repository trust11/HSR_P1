const Datastore = require( 'nedb-promise');
const Note = require('./note');

class NoteStore {
    constructor(db) {
        this.db = db || new Datastore({filename: './data/note.db', autoload: true});
    }

    async insert(jsonRow) {
        await this.db.insert(jsonRow);
    }

    async update(id, set) {
        await this.db.update({_id: id}, {$set: set});
    }

    async delete(id) {
        this.db.remove({_id: id});
        //return await this.get(id);
    }

    async get(id) {
        return await thisfind({"_id": id});
    }

    async all() {
        return await this.find({});
    }

    async getNoteInstance(){
        return new Promise((resolve) => {
            resolve(new Note());
        });
    }

    async find(filter){
        return await this.db.find(filter);
    }
}

module.exports = NoteStore;
