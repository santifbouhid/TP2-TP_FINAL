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
        this.router.delete("/recipes/delete/:id",this.controller.deleteRecipesById)
        
        return this.router;
    }
}

export default RecipesRouter;