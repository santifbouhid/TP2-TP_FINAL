import Factory from "../models/Factory.js";

class RecipesService {
    constructor() {
        this.model = Factory.get()
    }

    getAllRecipes = () => this.model.getAllRecipes()

    
}

export default RecipesService;