class UsersModelMem {
    constructor() {
        this.users = []
    }

    getUserById = async (id) => {
        const allUsers = await this.users
        const user = allUsers.filter(user => user.id === id)
        if (user.length === 0) {
            return `El usuario con el ID ${id} no existe`
        } else {
            return user
        }
    }

    getUsersByRol = async (rol) => {
        const allUsers = await this.users
        const user = allUsers.filter(user => user.rol === rol)
        if (user.length === 0) {
           return `El usuario con el rol ${rol} no existe`
        } else {
           return user
      }

    getAllUsers = async () => {
        return this.users
    }

    getUserByName = async (name) => {
        const allUsers = await this.users
        const user = allUsers.filter(user => user.name === name)
        if (user.length === 0) {
            return `El usuario con el nombre ${name} no existe`
        } else {
            return user
        }
    }

    updateUser = async (id, data) => {
        try {
            let resp
            if (data !== null) {
                const index = await this.users.findIndex(u => u.id == id)
                if (index > -1) {
                    const newUser = { ...this.users[index], ...data }
                    this.users.splice(index, 1, newUser)
                } else {
                    resp = 'Id inválido';
                }
            } else {
                throw new Error("La información que intenta agregar no existe.")
            }
        } catch (error) {
            console.error(error);
        }
    }


    uploadNewUser = async (user) => {
        const allUsers = await this.users
        const idNew = allUsers[allUsers.length - 1].id + 1
        user.id = idNew
        this.users.push(user)
        return user
    }

    deleteUserById = async (id) => {
        const index = users.findIndex((e) => e.id == id)
        let resp
        if (index == -1) {
            resp = "El 'id' del usuario a borrar es incorrecto."
        } else {
            users.splice(index, 1)
            resp = "El usurio fue borrado exitosamente"
        }
        return resp
    }

}

export default UsersModelMem