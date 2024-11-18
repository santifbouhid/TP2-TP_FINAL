/**
 * @swagger
 * /recipes/allRecipes:
 *   get:
 *     summary: Subir una nueva receta
 *     responses:
 *       200:
 *         description: Operación exitosa.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                {
 *                   "_id": "6733b5239bee9ca353f3cd4b",
 *                   "name": "Pizza Margherita Clásica",
 *                   "ingredients": [
 *                     "Masa para pizza",
 *                     "Salsa de tomate",
 *                     "Queso mozzarella fresco",
 *                     "Hojas de albahaca fresca",
 *                     "Aceite de oliva",
 *                     "Sal y pimienta a gusto"
 *                   ],
 *                   "instructions": [
 *                     "Precalentar el horno a 245°C (475°F).",
 *                     "Estirar la masa para pizza y esparcir la salsa de tomate de manera uniforme.",
 *                     "Cubrir con rodajas de mozzarella fresca y hojas de albahaca.",
 *                     "Rociar con aceite de oliva y sazonar con sal y pimienta.",
 *                     "Hornear en el horno precalentado durante 12-15 minutos o hasta que la masa esté dorada.",
 *                     "Cortar en porciones y servir caliente."
 *                   ],
 *                   "prepTimeMinutes": 20,
 *                   "cookTimeMinutes": 15,
 *                   "servings": 4,
 *                   "difficulty": "Fácil",
 *                   "cuisine": "Italiana",
 *                   "caloriesPerServing": 300,
 *                   "tags": ["Pizza", "Italiana"],
 *                   "userId": 166,
 *                   "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
 *                   "rating": 4.6,
 *                   "reviewCount": 98,
 *                   "mealType": ["Cena"],
 *                   "apto": ["veggie"]
 *                 }
 */

/**
 * @swagger
 * /recipes/newRecipe:
 *   post:
 *     summary: Crear una nueva receta
 *     parameters:
 *       - name: role
 *         in: header
 *         required: true
 *         description: Se necesita rol "admin" para realizar la query.
 *         schema:
 *           type: string
 *           example: admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *                 example: "6733b5239bee9ca353f3cd4b"
 *               name:
 *                 type: string
 *                 example: "Pizza Margherita Clásica"
 *               ingredients:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["Masa para pizza", "Salsa de tomate", "Queso mozzarella fresco"]
 *               instructions:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: [
 *                   "Precalentar el horno a 245°C (475°F).",
 *                   "Estirar la masa para pizza y esparcir la salsa de tomate de manera uniforme.",
 *                   "Cubrir con rodajas de mozzarella fresca y hojas de albahaca.",
 *                   "Rociar con aceite de oliva y sazonar con sal y pimienta.",
 *                   "Hornear en el horno precalentado durante 12-15 minutos o hasta que la masa esté dorada.",
 *                   "Cortar en porciones y servir caliente."
 *                 ]
 *               prepTimeMinutes:
 *                 type: integer
 *                 example: 20
 *               cookTimeMinutes:
 *                 type: integer
 *                 example: 15
 *               servings:
 *                 type: integer
 *                 example: 4
 *               difficulty:
 *                 type: string
 *                 example: "Fácil"
 *               cuisine:
 *                 type: string
 *                 example: "Italiana"
 *               caloriesPerServing:
 *                 type: number
 *                 example: 300
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["Pizza", "Italiana"]
 *               userId:
 *                 type: integer
 *                 example: 166
 *               image:
 *                 type: string
 *                 example: "https://cdn.dummyjson.com/recipe-images/1.webp"
 *               rating:
 *                 type: number
 *                 example: 4.6
 *               reviewCount:
 *                 type: integer
 *                 example: 98
 *               mealType:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["Cena"]
 *               apto:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["veggie"]
 *     responses:
 *       200:
 *         description: Receta creada con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 {
 *                   "_id": "6733b5239bee9ca353f3cd4b",
 *                   "name": "Pizza Margherita Clásica",
 *                   "ingredients": [
 *                     "Masa para pizza",
 *                     "Salsa de tomate",
 *                     "Queso mozzarella fresco",
 *                     "Hojas de albahaca fresca",
 *                     "Aceite de oliva",
 *                     "Sal y pimienta a gusto"
 *                   ],
 *                   "instructions": [
 *                     "Precalentar el horno a 245°C (475°F).",
 *                     "Estirar la masa para pizza y esparcir la salsa de tomate de manera uniforme.",
 *                     "Cubrir con rodajas de mozzarella fresca y hojas de albahaca.",
 *                     "Rociar con aceite de oliva y sazonar con sal y pimienta.",
 *                     "Hornear en el horno precalentado durante 12-15 minutos o hasta que la masa esté dorada.",
 *                     "Cortar en porciones y servir caliente."
 *                   ],
 *                   "prepTimeMinutes": 20,
 *                   "cookTimeMinutes": 15,
 *                   "servings": 4,
 *                   "difficulty": "Fácil",
 *                   "cuisine": "Italiana",
 *                   "caloriesPerServing": 300,
 *                   "tags": ["Pizza", "Italiana"],
 *                   "userId": 166,
 *                   "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
 *                   "rating": 4.6,
 *                   "reviewCount": 98,
 *                   "mealType": ["Cena"],
 *                   "apto": ["veggie"]
 *                 }
 */

















import RecipesController from "../controllers/recipes.controller.js";
import express from 'express'
import { roleAuth } from "../middleware/roleAuth.js";

class RecipesRouter {
    constructor() {
        this.router = new express.Router();
        this.controller = new RecipesController();
    }

    start() {
        this.router.get("/allRecipes", this.controller.getAllRecipes)
        this.router.get("/recipes/:id", this.controller.getRecipesById)
        this.router.get("/byRestrictions/:apto", this.controller.getRecipesByRestriction)//
        this.router.get("/byIngredient/:ingredient", this.controller.getRecipesByIngredient)//
        this.router.get("/byDifficulty/:difficulty", this.controller.getRecipesByDifficulty)//
        this.router.delete("/delete/:id", this.controller.deleteRecipeById)
        this.router.patch("/update/:id", this.controller.updateRecipe)
        this.router.patch("/update/tags/:id", this.controller.updateTags)
        this.router.post("/newRecipe", roleAuth, this.controller.uploadNewRecipe)
        return this.router;
    }
}

export default RecipesRouter;