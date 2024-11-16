import RecipesController from "../controllers/recipes.controller.js";
import express from 'express'

class RecipesRouter {
    constructor() {
        this.router = new express.Router();
        this.controller = new RecipesController();
    }

    start(){
        this.router.get("/allRecipes", this.controller.getAllRecipes)
        this.router.get("/recipes/:id", this.controller.getRecipesById)
        this.router.post("/newRecipe", this.controller.uploadNewRecipe)
        return this.router;
    }
}

export default RecipesRouter;