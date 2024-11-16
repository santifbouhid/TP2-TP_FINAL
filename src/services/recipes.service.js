import Factory from "../models/DAO/Factory.js"
import config from "../config.js"
import { GiphyFetch } from '@giphy/js-fetch-api'

class RecipesService {
    constructor() {
        this.model = Factory.get(config.PERSISTENCE).recipes
    }

    getAllRecipes = async () => {
        const allRecipes = await this.model.getAllRecipes()
        return allRecipes
    }

    getRecipesById = async (id) => {
        const recipe = await this.model.getRecipeById(id)
        const primerNombre = recipe.name.split(" ")[0]
        const gif = await this.getGiphy(primerNombre)
        const url = gif.data[0].url
        return {
            gif: url,
            recipe: recipe
        };
    }

    deleteRecipesById = async (id) => {
        return await this.model.deleteRecipesById(id)
    }
    updateRecipe = async (id, data) => {
        return await this.model.updateRecipe(id, data);
    }
    uploadNewRecipe = async (recipe) => {
        return await this.model.uploadNewRecipe(recipe)
    }

    getGiphy = async (name) => {
        const giphyKey = config.GIPHYKEY
        const gf = new GiphyFetch(giphyKey)
        const result = await gf.search(name, { offset:0, limit:1 });
        return result
    }

}

export default RecipesService;