import MongoConnection from "../MongoConnection.js"
import { ObjectId } from "mongodb"

class RecipesModelMongo {
  constructor() {}

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
    return recipe;
  };

  updateTags = async (id, data) => {
    try{
    let resp;
    if (data.tags !== undefined) {
        resp = await MongoConnection.db.collection("recipes").updateOne(
            { _id: ObjectId.createFromHexString(id) },
            { $set: {"tags": data.tags} }
          );
        if (resp.matchedCount === 0){
          resp = 'El ID es incorrecto';
        }
    }else{
        resp = 'Tags inválidos';
    }
    return await resp;
    } catch(error){
        console.error(error);
    }
}

}

export default RecipesModelMongo;

