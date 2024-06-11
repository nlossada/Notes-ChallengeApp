const { getNotesController, postNoteController, deleteNoteController, updateNoteController, getNoteByIdController } = require("../controllers/noteControllers")



const getNotesHandler = async (req, res) => {
    try {
        const notesDB = await getNotesController();
        return res.status(200).json(notesDB)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}





const postNoteHandler = async (req, res) => {
    try {
        const { CategoriesId, title, text, archived } = req.body;
        const createdNote = await postNoteController(title, text, archived);
        //relacion note N:N category - agrega registros a tabla intermedia
        await createdNote.addCategories(CategoriesId)
        return res.status(200).json(createdNote)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



const deleteNoteHandler = async (req, res) => {
    try {
        const { idNote } = req.params
        const noteDeleted = await deleteNoteController(idNote)
        if (noteDeleted) {
            return res.status(200).json({ message: "Note deleted succesfully" })
        } else {
            res.status(400).json({ error: "No notes found to delete" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



const updateNoteHandler = async (req, res) => {
    try {
        const { idNote } = req.params
        const { CategoriesId, title, text, archived } = req.body;

        const noteUpdated = await updateNoteController(idNote, CategoriesId, title, text, archived)
        if (noteUpdated) {
            if (CategoriesId && CategoriesId.length > 0) {
                //delete the categories to the note table instance (response controller) and add new ones
                await noteUpdated.setTypes([])
                await noteUpdated.addTypes(CategoriesId)
            }
            //GET POKE -> add Types to response
            const noteUpdatedCategories = await getNoteByIdController(idNote)
            if (noteUpdatedCategories) return res.status(200).json(noteUpdatedCategories)
        } else {
            res.status(400).json({ error: "No note updated" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}




module.exports = {
    getNotesHandler,
    postNoteHandler,
    deleteNoteHandler,
    updateNoteHandler,
}