import UsersService from "../services/users.service.js";

class UsersController {
    constructor() {
        this.service = new UsersService();
    }

    getAllusers = async (req, res) => {
        const users = this.service.getAllUsers();
        res.status(200).send(users);
    }

    getUserByName = async (req, res) => {
        const { name } = req.params
        if (id == null) {
            res.status(400).send("Falta el nombre del usuario a buscar")
        } else {
            const user = await this.service.getUsersByName(name)
            res.status(200).send(user)
        }
    }
    deleteUserById = async (req, res) => {
        const { id } = req.params
        if (id == null) {
            res.status(400).send("Falta ID del usuario a borrar")
        } else {
            const deletedUser = await this.service.deleteUsersById(id)
            res.status(200).send(deletedUser)
        }

    }


}

export default UsersController;