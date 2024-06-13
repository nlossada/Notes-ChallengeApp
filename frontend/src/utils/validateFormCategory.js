export const validateInputFormCategory = (categoryData) => {
    const errors = {}

    //name -> requirements according to model
    if (!categoryData.name.length) errors.name = "You must provide a category name"
    else {
        if (categoryData.name.length < 3) errors.name = "Category must be at least 3 characters"
        if (categoryData.name.length > 25) errors.name = "Category must be a maximum of 25 characters"
    }

    //no other input to validate
    return errors
}