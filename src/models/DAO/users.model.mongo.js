import MongoConnection from "../MongoConnection.js"


class UsersModelMongo {
    constructor() {
    }

    getAllUsers = async () => {

        try {
            const data = await MongoConnection.db.collection("users").find({}).toArray()
            console.log("Lista de usuarios: ", data)
            return data
        }catch(err) {
            console.error("Error: ", err.message)
        }
    }

    getUsersByRol = async (rol) => {
        const data = await MongoConnection.db.collection("users").find({rol: rol}).toArray()

        return data
    }











}


export default UsersModelMongo