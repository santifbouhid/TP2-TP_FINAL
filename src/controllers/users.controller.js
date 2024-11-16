import UsersService from "../services/users.service.js";

class UsersController {
    constructor() {
        this.service = new UsersService();
    }

    getAllusers = async (req, res) => {
        const users = await this.service.getAllUsers();
        res.status(200).send(users);
    }

    getUserByName = async (req,res) => {
        const { name } = req.params
        if(id == null){
            res.status(400).send("Falta el nombre de la receta a buscar")
        } else {
            const user = await this.service.getUsersByName(name)
            res.status(200).send(user)
        }
    }

    getUsersByRol = async (req,res) => {
        const { rol } = req.params
        if(rol == null){
            res.status(400).send("Falta el rol del usuario a buscar")
        } else {
            const user = await this.service.getUsersByRol(rol)
            res.status(200).send(user)
        }
    }


}

export default UsersController;