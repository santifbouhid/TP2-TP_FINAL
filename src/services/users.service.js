import Factory from "../models/DAO/Factory.js"
import config from "../config.js"

class UsersService {
    constructor() {
        this.model = Factory.get(config.PERSISTENCE).users
    }
    getUserById = async (id) => {
        return await this.model.getUserById(id)
    }

    getAllUsers = async () => {
        return await this.model.getAllUsers()
    }

    getUserByName = async (name) => {
        return await this.model.getUserByName(name)
    }

    deleteUserById = async (id) => {
        return await this.model.deleteUserById(id)
    }
    getUsersByRol = async (rol) => {
        return await this.model.getUsersByRol(rol)
    }

    uploadNewUser = async (user) => {
        return await this.model.uploadNewUser(user)
    }
    
    updateRestrictions = async (id, data) => {
        return await this.model.updateRestrictions(id, data);
    }
    

}

export default UsersService;