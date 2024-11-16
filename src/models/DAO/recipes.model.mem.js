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

  deleteRecipesById = async (id) => {
    const index = recipes.findIndex((e) => e.id == id)
    let resp
    if (index == -1) {
      resp = "El 'id' de la receta a borrar es incorrecto."
    } else {
      animals.splice(index, 1)
      resp = "La receta fue borrada exitosamente"
    }
    return resp
  }
}

export default RecipesModelMem;
