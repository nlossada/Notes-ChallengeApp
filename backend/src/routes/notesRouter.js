const { Router } = require("express");
const { getNotesHandler, postNoteHandler, deleteNoteHandler, updateNoteHandler } = require("../handlers/noteHandlers")

const notesRouter = Router();


//main route of notes
notesRouter.get("/", getNotesHandler);

// notesRouter.get("/:idPokemon", getPokeByIdHandler); NO HACER, NO AMPLIAR

notesRouter.post("/", postNoteHandler);

notesRouter.delete("/:idNote", deleteNoteHandler)

notesRouter.put("/:idNote", updateNoteHandler)

module.exports = {
    notesRouter,
}