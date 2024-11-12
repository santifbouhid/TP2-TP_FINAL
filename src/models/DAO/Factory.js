import RecipesModelMem from "./recipes.model.mem.js";
import RecipesModelMongo from "./recipes.model.mongo.js";

class Factory {
    static get(persistence){
        switch (persistence) {
            case "MEM":
                console.log("Persistiendo en la memoria del servidor")
                return new RecipesModelMem()
            case "Mongo":
                console.log("Persistiendo en Mongo")
                return new RecipesModelMongo()
            default:
                console.log("Persistiendo por default en MongoDB")
                return new RecipesModelMongo()
        }
    }
}

export default Factory;