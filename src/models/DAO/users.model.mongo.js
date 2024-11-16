import MongoConnection from "../MongoConnection.js"


class UsersModelMongo {
    constructor() {
    }

    getAllUsers = async () => {

        try {
            const data = await MongoConnection.db.collection("users").find({}).toArray()
            return data
        }catch(err) {
            console.error("Error: ", err.message)
        }
    }

    getUsersByRol = async (rol) => {
        const data = await MongoConnection.db.collection("users").find({rol: rol}).toArray()
        return data
    }

    uploadNewUser = async(user) =>{
        const us = await MongoConnection.db.collection("users").insertOne(user)
        return us
    }

}


export default UsersModelMongo