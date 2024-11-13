class RecipesModelMem {
  constructor() {
    this.recipes = [{
      id: 1,
      receta: "receta"
    }]
  }

  getAllRecipes = async() => {
    const allRecipes = await this.recipes;
    return allRecipes
  };

  getRecipesById = async(id) => {
    const allRecipes = await this.recipes;
    const recipe = allRecipes.filter(r => r.id == id);
    if (recipe.length === 0) {
     return `La receta con la id ${id} no existe`
    } else {
      return recipe
    }
  }
}

export default RecipesModelMem;
