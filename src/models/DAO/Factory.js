import RecipesModelMem from "./recipes.model.mem.js";
import RecipesModelMongo from "./recipes.model.mongo.js";
import UsersModelMem from "./users.model.mem.js";

class Factory {
    static get(persistence){
        switch (persistence) {
            case "MEM":
                console.log("Persistiendo en la memoria del servidor")
                return {
                    recipes: new RecipesModelMem(),
                    users: new UsersModelMem()
                }
            case "Mongo":
                console.log("Persistiendo en Mongo")
                return {
                    recipes: new RecipesModelMongo()
                    //users: new UsersModelMongo()
                }
            default:
                console.log("Persistiendo por default en MongoDB")
                return {
                    recipes: new RecipesModelMongo()
                    //users: new UsersModelMongo()
                }        
        }
    }
}

export default Factory;