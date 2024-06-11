const { Router } = require("express");
const { getCategoryHandler, postCategoryHandler, deleteCategoryHandler } = require("../handlers/categoryHandlers")

const categoriesRouter = Router();


//main route of categories
categoriesRouter.get("/", getCategoryHandler);

// categoriesRouter.get("/:idCategory", getCategoryByIdHandler);

categoriesRouter.post("/", postCategoryHandler);

categoriesRouter.delete("/:idCategory", deleteCategoryHandler)

// categoriesRouter.put("/:idCategory", updateCategoryHandler)

module.exports = {
    categoriesRouter
}