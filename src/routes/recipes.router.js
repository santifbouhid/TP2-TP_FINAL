import RecipesController from "../controllers/recipes.controller.js";
import express from 'express'

class RecipesRouter {
    constructor() {
        this.router = new express.Router();
        this.controller = new RecipesController();
    }

    start() {
        this.router.get("/allRecipes", this.controller.getAllRecipes)
        this.router.get("/recipes/:id", this.controller.getRecipesById)
        this.router.get("/byRestrictions/:apto", this.controller.getRecipesByRestriction)//
        this.router.get("/byIngredient/:ingredient", this.controller.getRecipesByIngredient)//
        this.router.get("/byDifficulty/:difficulty", this.controller.getRecipesByDifficulty)//
        this.router.delete("/delete/:id", this.controller.deleteRecipeById)
        this.router.patch("/update/:id", this.controller.updateRecipe)
        this.router.patch("/update/tags/:id", this.controller.updateTags)
        this.router.post("/newRecipe", this.controller.uploadNewRecipe)
        return this.router;
    }
}

export default RecipesRouter;