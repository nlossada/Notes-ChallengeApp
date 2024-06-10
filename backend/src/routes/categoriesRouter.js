const { Router } = require("express");
// const { getPokeHandler, getPokeByIdHandler, postPokemons, deletePokemonHandler, updatePokeHandler } = require("../handlers/pokemonsHandlers")

const categoriesRouter = Router();


//main route of categories
// categoriesRouter.get("/", getPokeHandler);

// categoriesRouter.get("/:idPokemon", getPokeByIdHandler);

// categoriesRouter.post("/", postPokemons);

// categoriesRouter.delete("/:idPokemon", deletePokemonHandler)

// categoriesRouter.put("/:idPokemon", updatePokeHandler)

module.exports = {
    categoriesRouter
}