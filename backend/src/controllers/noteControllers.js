// const axios = require("axios");
const { Note, Category } = require("../db");
const { standardDataNoteObject, standardDataNoteArray } = require("../utils/standardData");
// const { Op } = require("sequelize");


const getNotesController = async () => {
    // Consulta de la base de datos
    const allNotesDB = await Note.findAll({ include: Category });
    const allNotes = standardDataNoteArray(allNotesDB)

    if (allNotes.length > 0) {
        return allNotes;
    }

}



const postNoteController = async (title, text, archived) => {
    if (text) {
        const newNote = await Note.create({ title, text, archived })
        if (newNote) {
            return newNote
        }
    }
    throw new Error("No note created, missing data")
}


const deleteNoteController = async (idNote) => {
    if (idNote) {
        const noteDeleted = await Note.destroy({ where: { id: idNote } })
        if (noteDeleted === 1) return true
    }
    else {
        throw new Error("No note deleted, invalid id")
    }
}

const updateNoteController = async (idNote, title, text, archived) => {
    if (idNote) {
        const noteUpdatedProps = await Note.update({ title, text, archived }, { where: { id: idNote } })

        if (noteUpdatedProps > 0) {
            const responseUpdated = await Note.findOne({
                where: { id: idNote }
            })
            if (responseUpdated) return responseUpdated
        } else {
            throw new Error(`No notes updated`)
        }
    } else {
        throw new Error(`No note found on DB with id: ${idNote}`)
    }
}

const getNoteByIdController = async (idNote) => {
    const noteDB = await Note.findOne({
        where: { id: idNote }, include: Category
    })

    const noteById = standardDataNoteObject(noteDB)
    if (noteById) return noteById
    throw new Error(`No notes found on DB with id: ${idNote}`)
}

module.exports = {
    getNotesController,
    postNoteController,
    deleteNoteController,
    updateNoteController,
    getNoteByIdController,
}
