import RecipesService from "../services/recipes.service.js";

class RecipesController {
    constructor() {
        this.service = new RecipesService();
    }

    getAllRecipes = async (req, res) => {
        const recipes = await this.service.getAllRecipes();
        res.send(recipes);
    }

    getRecipesById = async (req, res) => {
        const { id } = req.params
        if (id == null) {
            res.status(400).send("Falta ID de la receta a buscar")
        } else {
            const recipe = await this.service.getRecipesById(id)
            res.status(200).send(recipe)
        }
    }

    getRecipesByDifficulty = async (req, res) => {
        const { difficulty } = req.params
        if (difficulty == null) {
            res.status(400).send("Falta la dificultad de la receta a buscar")
        } else {
            const recipes = await this.service.getRecipesByDifficulty(difficulty)
            res.status(200).send(recipes)
        }
    }

    getRecipesByIngredient = async (req, res) => {
        const { ingredient } = req.params
        if (ingredient == null) {
            res.status(400).send("Falta el ingrediente de las recetas a buscar")
        } else {
            const recipes = await this.service.getRecipesByIngredient(ingredient)
            res.status(200).send(recipes)
        }

    }

    getRecipesByRestriction = async (req, res) => {
        const { apto } = req.params
        if (apto == null) {
            res.status(400).send("Faltan restricciones de las recetas a buscar")
        } else {
            const recipe = await this.service.getRecipesByRestriction(apto)
            res.status(200).send(recipe)
        }
    }

    deleteRecipeById = async (req, res) => {
        const { id } = req.params
        if (id == null) {
            res.status(400).send("Falta ID de la receta a borrar")
        } else {
            const deletedRecipe = await this.service.deleteRecipeById(id)
            res.status(200).send(deletedRecipe)
        }
    }

    updateRecipe = async (req, res) => {
        const { id } = req.params;
        const data = req.body;
        const newRecipe = await this.service.updateRecipe(id, data);
        res.send(newRecipe);
    }

    updateTags = async (req, res) => {
        // Ejemplo Postman: {"tags":["Rico", "Liviano", "Saludable"]}
        const { id } = req.params;
        const data = req.body;
        const newRecipe = await this.service.updateTags(id, data);
        res.send(newRecipe);
    }

    uploadNewRecipe = async (req, res) => {
        const newRecipe = req.body
        if (JSON.stringify(newRecipe) === "{}") {
            res.status(400).send("El cuerpo no puede estar vacio")
        } else {
            const newRec = await this.service.uploadNewRecipe(newRecipe)
            res.status(200).send(newRec)
        }
    }
}

export default RecipesController;