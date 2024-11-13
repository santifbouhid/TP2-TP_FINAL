class UsersModelMem {
    constructor(){
        this.users = []
    }

    getAllUsers = async() => {
        return this.users
    }

    getUserByName = async(name) => {
        const allUsers = await this.users
        const user = allUsers.filter(user => user.name === name)

        if(user.length === 0){
            return `El usuario con la id ${id} no existe`
        } else {
            return user
        }
    }

}

export default UsersModelMem