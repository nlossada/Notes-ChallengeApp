const { getCategoriesController, postCategoryController, deleteCategoryController } = require("../controllers/categoryControllers")



const getCategoryHandler = async (req, res) => {
    try {
        const categoriesDB = await getCategoriesController();
        return res.status(200).json(categoriesDB)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}





const postCategoryHandler = async (req, res) => {
    try {
        const { name } = req.body;
        const createdCategory = await postCategoryController(name);
        return res.status(200).json(createdCategory)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



const deleteCategoryHandler = async (req, res) => {
    try {
        const { idCategory } = req.params
        const CategoryDeleted = await deleteCategoryController(idCategory)
        if (CategoryDeleted) {
            return res.status(200).json({ message: "Category deleted succesfully" })
        } else {
            res.status(400).json({ error: "No Categorys found to delete" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



// const updateCategoryHandler = async (req, res) => {
//     try {
//         const { idCategory } = req.params
//         const { CategoriesId, title, text, archived } = req.body;

//         const CategoryUpdated = await updateCategoryController(idCategory, CategoriesId, title, text, archived)
//         if (CategoryUpdated) {
//             if (CategoriesId && CategoriesId.length > 0) {
//                 //delete the categories to the Category table instance (response controller) and add new ones
//                 await CategoryUpdated.setTypes([])
//                 await CategoryUpdated.addTypes(CategoriesId)
//             }
//             //GET POKE -> add Types to response
//             const CategoryUpdatedCategories = await getCategoryByIdController(idCategory)
//             if (CategoryUpdatedCategories) return res.status(200).json(CategoryUpdatedCategories)
//         } else {
//             res.status(400).json({ error: "No Category updated" });
//         }
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }




module.exports = {
    getCategoryHandler,
    postCategoryHandler,
    deleteCategoryHandler,
}