import MongoConnection from "../MongoConnection.js"
import { ObjectId } from "mongodb"
import config from "../../config.js";

class RecipesModelMongo {
  constructor() {

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

  getAllRecipes = async () => {
    const allRecipes = await MongoConnection.db.collection("recipes").find({}).toArray()
    const gif = await this.getGiphy("pollo")
    console.log(gif.data[0].images.original.url)
    return allRecipes
  };


  uploadNewRecipe = async (recipe) => {
    const rec = await MongoConnection.db.collection("recipes").insertOne(recipe)
    return rec
  }

  getGiphy = async (name) => {
    const giphyKey = config.GIPHYKEY
    const gif = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}&limit=1&offset0&q=${name}`)
    const gifJson = gif.json()
    return gifJson
  }

  getRecipeById = async (id) => {
    const recipe = await MongoConnection.db
      .collection("recipes")
      .findOne({ _id: ObjectId.createFromHexString(id) });
    return recipe;
  }

  updateRecipe = async (id, data) => {
    const recipe = await MongoConnection.db.collection("recipes").updateOne(
      { _id: ObjectId.createFromHexString(id) },
      { $set: data }
    );
  };
}

export default RecipesModelMongo;

