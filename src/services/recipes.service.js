import Factory from "../models/DAO/Factory.js"
import config from "../config.js"
import { GiphyFetch } from '@giphy/js-fetch-api'

class RecipesService {
    constructor() {
        this.model = Factory.get(config.PERSISTENCE).recipes
        this.defaultGif = config.DEFAULTGIF
    }

    getAllRecipes = async () => {
        const allRecipes = await this.model.getAllRecipes()
        return allRecipes
    }

    getRecipesById = async (id) => {
        const recipe = await this.model.getRecipesById(id)
        const primerNombre = recipe.name.split(" ")[0]
        const gif = await this.getGiphy(primerNombre)
        const url = gif.data.length > 0 ? gif.data[0].images.original.url : this.defaultGif
        return {
            gif: url,
            recipe: recipe
        };
    }
    getRecipesByIngredient = async (ingredient) => {
        return await this.model.getRecipesByIngredient(ingredient)
    }
    getRecipesByRestriction = async (apto) => {
        return await this.model.getRecipesByRestriction(apto)
    }
    getRecipesByDifficulty = async (difficulty) => {
        return await this.model.getRecipesByDifficulty(difficulty)
    }
    deleteRecipeById = async (id) => {
        return await this.model.deleteRecipeById(id)
    }
    updateRecipe = async (id, data) => {
        return await this.model.updateRecipe(id, data);
    }
    updateTags = async (id, data) => {
        return await this.model.updateTags(id, data);
    }
    uploadNewRecipe = async (recipe) => {
        return await this.model.uploadNewRecipe(recipe)
    }

    getGiphy = async (name) => {
        const giphyKey = config.GIPHYKEY
        const gf = new GiphyFetch(giphyKey)
        const result = await gf.search(name, { offset: 0, limit: 1 });
        return result
    }

}

export default RecipesService;