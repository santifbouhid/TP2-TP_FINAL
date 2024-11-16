import Factory from "../models/DAO/Factory.js"
import config from "../config.js"

class UsersService {
    constructor() {
        this.model = Factory.get(config.PERSISTENCE).users
    }

    getAllUsers = async () => {
        return await this.model.getAllUsers()
    }

    getUsersByName = async (name) => {
        return await this.model.getUsersByName(name)
    }

    deleteUsersById = async (id) => {
        return await this.model.deleteUsersById(id)
    }

}

export default UsersService;