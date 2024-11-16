import Factory from "../models/DAO/Factory.js"
import config from "../config.js"

class UsersService {
    constructor() {
        this.model = Factory.get(config.PERSISTENCE).users
    }

    getAllUsers = async() => {
        return await this.model.getAllUsers()
    }

    getUsersByName = async(name) => {
        return await this.model.getUsersByName(name)
    }

    getUsersByRol = async(rol) => {
        return await this.model.getUsersByRol(rol)
    }



    
}

export default UsersService;