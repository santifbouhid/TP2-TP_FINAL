import MongoConnection from "../MongoConnection.js"
import { ObjectId } from "mongodb";

class UsersModelMongo {
    constructor() { }

    getUserById = async (id) => {
        const user = await MongoConnection.db
            .collection("users")
            .findOne({ _id: ObjectId.createFromHexString(id) });
        return await user
    }

    getAllUsers = async () => {

        try {
            const data = await MongoConnection.db.collection("users").find({}).toArray()
            return data
        } catch (err) {
            console.error("Error: ", err.message)
        }
    }
    getUserByName = async (name) => {
        const user = await MongoConnection.db
            .collection("users")
            .findOne({ username: name });
        return await user
    }

    getUsersByRol = async (rol) => {
        const data = await MongoConnection.db.collection("users").find({ rol: rol }).toArray()
        return data
    }

    uploadNewUser = async (user) => {
        const us = await MongoConnection.db.collection("users").insertOne(user)
        return us
    }
    deleteUserById = async (id) => {
        const user = await MongoConnection.db.collection("users").deleteOne({ _id: ObjectId.createFromHexString(id) })
        return user
    }

}


export default UsersModelMongo
