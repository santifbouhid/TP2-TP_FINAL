class UsersModelMem {
    constructor() {
        this.users = []
    }

    getAllUsers = async () => {
        return this.users
    }

    getUserByName = async (name) => {
        const allUsers = await this.users
        const user = allUsers.filter(user => user.name === name)

        if (user.length === 0) {
            return `El usuario con la id ${id} no existe`
        } else {
            return user
        }
    }


    uploadNewUser = async (user) => {
        const allUsers = await this.users
        const idNew = allUsers[allUsers.length - 1].id + 1
        user.id = idNew
        this.users.push(user)
        return user
    }

}

export default UsersModelMem