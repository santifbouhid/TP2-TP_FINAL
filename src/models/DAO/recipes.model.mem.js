class RecipesModelMem {
  constructor() {
    this.recipes = [{
      id: 1,
      receta: "receta"
    }]
  }

  getAllRecipes = async () => {
    const allRecipes = await this.recipes;
    return allRecipes
  };

  getRecipesById = async (id) => {
    const allRecipes = await this.recipes;
    const recipe = allRecipes.filter(r => r.id == id);
    if (recipe.length === 0) {
      return `La receta con la id ${id} no existe`
    } else {
      return recipe
    }
  }

  uploadNewRecipe = async (recipe) => {
    const allRecipes = await this.recipes
    const idNew = allRecipes[allRecipes.length - 1].id + 1
    recipe.id = idNew
    this.recipes.push(recipe)
    return recipe
  }

}

export default RecipesModelMem;
