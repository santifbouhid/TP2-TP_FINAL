import RecipesService from "../services/recipes.service.js";

class RecipesController {
    constructor() {
        this.service = new RecipesService();
    }

    getAllRecipes = async (req, res) => {
        const recipes = await this.service.getAllRecipes();
        res.send(recipes);
    }

    getRecipesById = async (req,res) => {
        const { id } = req.params
        if(id == null){
            res.status(400).send("Falta ID de la receta a buscar")
        } else {
            const recipe = await this.service.getRecipesById(id)
            res.status(200).send(recipe)
        }
    }
}

export default RecipesController;