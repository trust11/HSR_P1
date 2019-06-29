const express  = require('express');
const router = express.Router();
const noteController = require( '../controller/noteController');


/*
router.get("/", async (request, response) => {
    await noteController.getNotes(request, response);
});


router.put("/", async (request, response) => {
    await noteController.updateNote(request, response);
});*/




router.get("/", noteController.getNotes.bind(noteController)); //alle oder einer wenn mit id
router.put ("/", noteController.updateNote.bind(noteController));     // Update
router.post("/", noteController.createNote.bind(noteController));
//router.patch("/:id:status", noteController.updateNote.bind(noteController));  // id wert
//router.delete("/:id/", noteController.deleteNote.bind(noteController));

module.exports = router;