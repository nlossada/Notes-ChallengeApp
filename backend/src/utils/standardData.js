
//standardize data from array -> findAll [{},{}]
const standardDataNoteArray = (dataArr) => {
    const allNotes = dataArr.map((noteDataObj) => ({
        id: noteDataObj.id,
        title: noteDataObj.title,
        text: noteDataObj.text,
        archived: noteDataObj.archived,
        categories: noteDataObj.categories.map((category) => category.name)
    }))

    if (allNotes) return allNotes;
    throw new Error("Missing data from getDataDBArray")
}


//standardize data from object -> findOne {}
const standardDataNoteObject = (noteDataObj) => {
    const noteData = {
        id: noteDataObj.id,
        title: noteDataObj.title,
        text: noteDataObj.text,
        archived: noteDataObj.archived,
        categories: noteDataObj.categories.map((category) => category.name)
    }
    if (noteData) return noteData
    throw new Error("Missing data from getDataNoteObject")
}

module.exports = {
    standardDataNoteArray,
    standardDataNoteObject
}