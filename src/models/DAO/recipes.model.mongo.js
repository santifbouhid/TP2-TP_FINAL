import MongoConnection from "../MongoConnection.js"
import { ObjectId } from "mongodb"
import express from 'express'
import config from "../../config.js";

class RecipesModelMongo {
  constructor() {}
  
  getAllRecipes = async () => {
    const allRecipes = await MongoConnection.db.collection("recipes").find({}).toArray()
    const gif = await this.getGiphy("pollo")
    console.log(gif.data[0].images.original.url)
    return allRecipes
  };

    
  uploadNewRecipe = async(recipe) =>{
    const rec = await MongoConnection.db.collection("recipes").insertOne(recipe)
    return rec
  }

  getGiphy = async(name) => {
    const giphyKey = config.GIPHYKEY
    const gif = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}&limit=1&offset0&q=${name}`)
    const gifJson = gif.json()
    return gifJson
  }
}
  
  export default RecipesModelMongo;
  