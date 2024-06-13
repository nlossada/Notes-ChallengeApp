// const axios = require("axios");
const { Category } = require("../db");



const getCategoriesController = async () => {
    // Consulta de la base de datos
    const allCategories = await Category.findAll();

    if (allCategories.length > 0) {
        return allCategories;
    }

    // throw new Error("No Categories found");
}



const postCategoryController = async (name) => {
    if (name) {
        const newCategory = await Category.create({ name })
        if (newCategory) {
            return newCategory
        }
    }
    throw new Error("No Category created, missing data")
}


const deleteCategoryController = async (idCategory) => {
    if (idCategory) {
        const CategoryDeleted = await Category.destroy({ where: { id: idCategory } })
        if (CategoryDeleted === 1) return true
    }
    else {
        throw new Error("No Category deleted, invalid id")
    }
}

// const updateCategoryController = async (idCategory, title, text, archived) => {
//     if (idCategory) {
//         const CategoryUpdatedProps = await Category.update({ title, text, archived }, { where: { id: idCategory } })

//         if (CategoryUpdatedProps > 0) {
//             const responseUpdated = await Category.findOne({
//                 where: { id: idCategory }
//             })
//             if (responseUpdated) return responseUpdated
//         } else {
//             throw new Error(`No Categories updated`)
//         }
//     } else {
//         throw new Error(`No Category found on DB with id: ${idCategory}`)
//     }
// }

// const getCategoryByIdController = async (idCategory) => {
//     const CategoryDB = await Category.findOne({
//         where: { id: idCategory }, include: Category
//     })

//     const CategoryById = standardDataCategoryObject(CategoryDB)
//     if (CategoryById) return CategoryById
//     throw new Error(`No Categories found on DB with id: ${idCategory}`)
// }

module.exports = {
    getCategoriesController,
    postCategoryController,
    deleteCategoryController,
}