const { Router } = require("express");
const { notesRouter } = require("./notesRouter");
const { categoriesRouter } = require("./categoriesRouter");


const router = Router();

// Routes
router.use("/notes", notesRouter)

router.use("/categories", categoriesRouter)

router.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" })
})


module.exports = router;