import RecipesController from "../controllers/recipes.controller.js";
import express from 'express'

class RecipesRouter {
    constructor() {
        this.controller = new RecipesController();
        this.router = new express.Router();
    }

    start(){

        this.router.get("/recipes", this.controller.getAllRecipes);

        return this.router;
    }
}

export default RecipesRouter;