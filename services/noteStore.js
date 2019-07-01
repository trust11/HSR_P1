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
        let result = await this.db.find({"_id": id});
        return result;
    }

    async all() {
        let result = await this.db.find({"stateActive":true});
        return result;
    }

    async getNoteInstance(){
        return new Promise((resolve, reject) => {
            resolve(new Note());
        });
    }
}

module.exports = NoteStore;
