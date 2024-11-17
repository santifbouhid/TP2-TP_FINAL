import MongoConnection from "../MongoConnection.js"
import { ObjectId } from "mongodb"

class RecipesModelMongo {
  constructor() { }

  deleteRecipeById = async (id) => {
    const recipeDeleted = await MongoConnection.db.collection("recipes").deleteOne({ _id: ObjectId.createFromHexString(id) })
    return recipeDeleted
  }

  getAllRecipes = async () => {
    const allRecipes = await MongoConnection.db.collection("recipes").find({}).toArray()
    return allRecipes
  };


  uploadNewRecipe = async (recipe) => {
    const rec = await MongoConnection.db.collection("recipes").insertOne(recipe)
    return rec
  }

  getRecipeById = async (id) => {
    const recipe = await MongoConnection.db
      .collection("recipes")
      .findOne({ _id: ObjectId.createFromHexString(id) });
    return recipe
  }

  updateRecipe = async (id, data) => {
    const recipe = await MongoConnection.db.collection("recipes").updateOne(
      { _id: ObjectId.createFromHexString(id) },
      { $set: data }
    );
  };

}

export default RecipesModelMongo;

