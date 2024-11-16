class RecipesModelMem {
  constructor() {
    this.recipes = [
    {
        id: 1,
        name: "Pizza Margherita Clásica",
        ingredients: [
            "Masa para pizza",
            "Salsa de tomate",
            "Queso mozzarella fresco",
            "Hojas de albahaca fresca",
            "Aceite de oliva",
            "Sal y pimienta a gusto"
        ],
        instructions: [
            "Precalentar el horno a 245°C (475°F).",
            "Estirar la masa para pizza y esparcir la salsa de tomate de manera uniforme.",
            "Cubrir con rodajas de mozzarella fresca y hojas de albahaca.",
            "Rociar con aceite de oliva y sazonar con sal y pimienta.",
            "Hornear en el horno precalentado durante 12-15 minutos o hasta que la masa esté dorada.",
            "Cortar en porciones y servir caliente."
        ],
        prepTimeMinutes: 20,
        cookTimeMinutes: 15,
        servings: 4,
        difficulty: "Fácil",
        cuisine: "Italiana",
        caloriesPerServing: 300,
        tags: [
            "Pizza",
            "Italiana"
        ],
        userId: 166,
        image: "https://cdn.dummyjson.com/recipe-images/1.webp",
        rating: 4.6,
        reviewCount: 98,
        mealType: [
            "Cena"
        ],
        apto: [
            "veggie"
        ]
    },
    {
        id: 2,
        name: "Salteado Vegetariano",
        ingredients: [
            "Tofu en cubos",
            "Ramilletes de brócoli",
            "Zanahorias en rodajas",
            "Pimientos en rodajas",
            "Salsa de soja",
            "Jengibre picado",
            "Ajo picado",
            "Aceite de sésamo",
            "Arroz cocido para servir"
        ],
        instructions: [
            "En un wok, calienta el aceite de sésamo a fuego medio-alto.",
            "Agrega el jengibre y el ajo picados, saltea hasta que desprendan aroma.",
            "Añade el tofu en cubos y saltea hasta que esté dorado.",
            "Agrega el brócoli, las zanahorias y los pimientos. Cocina hasta que las verduras estén tiernas pero crujientes.",
            "Vierte la salsa de soja sobre el salteado y mezcla bien.",
            "Sirve sobre arroz cocido."
        ],
        prepTimeMinutes: 15,
        cookTimeMinutes: 20,
        servings: 3,
        difficulty: "Media",
        cuisine: "Asiática",
        caloriesPerServing: 250,
        tags: [
            "Vegetariano",
            "Salteado",
            "Asiática"
        ],
        userId: 143,
        image: "https://cdn.dummyjson.com/recipe-images/2.webp",
        rating: 4.7,
        reviewCount: 26,
        mealType: [
            "Almuerzo"
        ],
        apto: [
            "vegan",
            "veggie",
            "gf"
        ]
    },
    {
        id: 3,
        name: "Galletas con Chispas de Chocolate",
        ingredients: [
            "Harina de trigo",
            "Manteca, ablandada",
            "Azúcar morena",
            "Azúcar blanca",
            "Huevos",
            "Extracto de vainilla",
            "Bicarbonato de sodio",
            "Sal",
            "Chispas de chocolate"
        ],
        instructions: [
            "Precalentar el horno a 175°C (350°F).",
            "En un bol, batir juntos la manteca ablandada, el azúcar morena y el azúcar blanca.",
            "Agregar los huevos uno a la vez, luego añadir el extracto de vainilla.",
            "Mezclar la harina, el bicarbonato de sodio y la sal. Agregar gradualmente a los ingredientes húmedos.",
            "Incorporar las chispas de chocolate.",
            "Colocar cucharadas de la masa en bandejas para hornear sin engrasar.",
            "Hornear durante 10-12 minutos o hasta que los bordes estén dorados.",
            "Dejar enfriar las galletas en la bandeja por unos minutos antes de pasarlas a una rejilla."
        ],
        prepTimeMinutes: 15,
        cookTimeMinutes: 10,
        servings: 24,
        difficulty: "Fácil",
        cuisine: "Americana",
        caloriesPerServing: 150,
        tags: [
            "Galletas",
            "Postre",
            "Horneado"
        ],
        userId: 34,
        image: "https://cdn.dummyjson.com/recipe-images/3.webp",
        rating: 4.9,
        reviewCount: 13,
        mealType: [
            "Merienda",
            "Postre"
        ],
        apto: []
    }
];
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

//   addTagsToRecipe = async (id, tag) => {
//     let resp;
//     const index = this.recipes.findIndex((r) => r.id == id)
//     if (index !== -1){

//     }else{

//     }
    

//     return  
//   }

}

export default RecipesModelMem;
