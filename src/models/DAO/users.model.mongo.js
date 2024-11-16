import MongoConnection from "../MongoConnection.js"


class UsersModelMongo {
    constructor() { }

    getAllUsers = () => {
        return this.users;
    };

    getUserById = async (id) => {
        const allUsers = await this.users
        const user = allUsers.filter(user => user.id === id)

        if (user.length === 0) {
            return `El usuario con el id ${id} no existe`
        } else {
            return user
        }
    }

    getAllUsers = async () => {

        try {
            const data = await MongoConnection.db.collection("users").find({}).toArray()
            return data
        } catch (err) {
            console.error("Error: ", err.message)
        }
    }

    getUsersByRol = async (rol) => {
        const data = await MongoConnection.db.collection("users").find({ rol: rol }).toArray()
        return data
    }

    uploadNewUser = async (user) => {
        const us = await MongoConnection.db.collection("users").insertOne(user)
        return us
    }

}


export default UsersModelMongo
