import UsersService from "../services/users.service.js";

class UsersController {
    constructor() {
        this.service = new UsersService();
    }

    getUserById = async (req, res) => {
        const { id } = req.params
        if (id == null) {
            res.status(400).send("Falta el id del usuario a buscar")
        } else {
            const user = await this.service.getUserById(id)
            res.status(200).send(user)
        }
    }
    getAllusers = async (req, res) => {
        const users = await this.service.getAllUsers();
        res.status(200).send(users);
    }

    getUserByName = async (req, res) => {
        const { name } = req.params
        if (name == null) {
            res.status(400).send("Falta el nombre del usuario a buscar")
        } else {
            const user = await this.service.getUserByName(name)
            res.status(200).send(user)
        }
    }
    deleteUserById = async (req, res) => {
        const { id } = req.params
        if (id == null) {
            res.status(400).send("Falta ID del usuario a borrar")
        } else {
            const deletedUser = await this.service.deleteUserById(id)
            res.status(200).send(deletedUser)
        }

    }

    getUsersByRol = async (req, res) => {
        const { rol } = req.params
        if (rol == null) {
            res.status(400).send("Falta el rol del usuario a buscar")
        } else {
            const user = await this.service.getUsersByRol(rol)
            res.status(200).send(user)
        }
    }

    uploadNewUser = async (req, res) => {
        const newUser = req.body
        if (JSON.stringify(newUser) === "{}") {
            res.status(400).send("El cuerpo no puede estar vacio")
        } else {
            const newUs = await this.service.uploadNewUser(newUser)
            res.status(200).send(newUs)
        }
    }

}

export default UsersController;