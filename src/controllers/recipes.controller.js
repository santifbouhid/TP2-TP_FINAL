import RecipesService from "../services/recipes.service.js";

class RecipesController {
    constructor() {
        this.service = new RecipesService();
    }

    getAllRecipes = (req, res) => {
        const recipes = this.service.getAllRecipes();
        res.send(recipes);
    }


}

export default RecipesController;