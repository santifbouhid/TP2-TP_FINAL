import MongoConnection from "../MongoConnection.js";
import { ObjectId } from "mongodb";
class RecipesModelMongo {
  constructor() {}

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
