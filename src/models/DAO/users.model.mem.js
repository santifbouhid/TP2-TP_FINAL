class UsersModelMem {
    constructor() {
        this.users = []
    }

    getAllUsers = async () => {
        return this.users
    }

    /*getUserById = async (id) => {
        const allUsers = await this.users
        const user = allUsers.filter(user => user.id === id)

        if (user.length === 0) {
            return `El usuario con el id ${id} no existe`
        } else {
            return user
        }
    }*/

}

export default UsersModelMem