import RecipesModelMem from "./DAO/recipes.model.mem.js";

class Factory {
    static get(persistence){
        switch (persistence) {
            case "MEM":
                console.log("Persistiendo en la memoria del servidor")
                return new RecipesModelMem()
            // case "FS":
            //     console.log("Persistiendo en File System")
            //     return new TransactionsModelFs()
            default:
                console.log("Persistiendo por default en la memoria del servidor")
                return new RecipesModelMem()
        }
    }
}

export default Factory;