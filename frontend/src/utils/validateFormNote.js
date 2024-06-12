export const validateInputFormNote = (noteData) => {
    const errors = {}

    //text -> requirements according to model
    if (!noteData.text.length) errors.text = "You must provide a text"
    else {
        if (noteData.text.length < 3) errors.text = "text must be at least 3 characters"
        if (noteData.text.length > 400) errors.text = "text must be a maximum of 400 characters"
    }

    //no other input to validate
    return errors
}



export const validateSelectFormNote = (noteData) => {
    const errors = {}

    if (noteData.CategoriesId.length < 1) errors.CategoriesId = "You must select at least one category, press Ctrl to select more"
    else {
        if (noteData.CategoriesId.length > 2) errors.CategoriesId = "You must select two types at most"
    }
    return errors.CategoriesId
}
