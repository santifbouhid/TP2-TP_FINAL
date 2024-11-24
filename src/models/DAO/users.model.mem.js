class UsersModelMem {
    constructor() {
        this.users = [
            {
                id: 1,
                username: "admin",
                pass: "admin",
                nombre: "algo",
                apellido: "apellido",
                informacion: "info",
                pronombre: "",
                favoritos: [],
                restricciones: [],
                rol: "admin"
            },
            {
                id: 2,
                username: "gluten",
                pass: "gluten",
                nombre: "gluten",
                apellido: "apellido",
                informacion: "info",
                pronombre: "",
                favoritos: [],
                restricciones: ["gluten"],
                rol: "user"
            },
            {
                id: 3,
                username: "vegan",
                pass: "vegan",
                nombre: "vegan",
                apellido: "apellido",
                informacion: "info",
                pronombre: "",
                favoritos: [],
                restricciones: ["vegan"],
                rol: "user"
            },
            {
                id: 4,
                username: "user",
                pass: "user",
                nombre: "user",
                apellido: "apellido",
                informacion: "info",
                pronombre: "",
                favoritos: [],
                restricciones: ["vegan"],
                rol: "user"
            },
            {
                id: 5,
                username: "Sherwood.Hammes",
                pass: "4dWn74OXfdx8hIo",
                nombre: "Damon",
                apellido: "Beatty",
                informacion: "swim lover, friend",
                pronombre: "Mrs.",
                favoritos: [],
                restricciones: ["vegan", "veggie"],
                rol: "admin"
            },
            {
                id: 6,
                username: "Claire_Boyle31",
                pass: "dsMhpVEvPBLD79d",
                nombre: "Nathanael",
                apellido: "Leffler",
                informacion: "grad, philosopher, dreamer",
                pronombre: "Dr.",
                favoritos: [],
                restricciones: ["vegan"],
                rol: "user"
            },
            {
                id: 7,
                username: "USER TEST ADMIN",
                pass: "dsMhpVEvPBLD79d",
                nombre: "USER",
                apellido: "TEST",
                informacion: "TEST NO BORRAR",
                pronombre: "Dr.",
                favoritos: [],
                restricciones: [],
                rol: "admin"
            }
        ];
    }

    getUserById = async (id) => {
        const allUsers = await this.users
        const user = allUsers.filter(user => user.id == id)
        if (user.length === 0) {
            return `El usuario con el ID ${id} no existe`
        } else {
            return user
        }
    }

    getAllUsers = async () => {
        return this.users
    }

    getUserByUsername = async (name) => {
        const allUsers = await this.users
        const user = allUsers.filter(user => user.username.toLowerCase() === name.toLowerCase())
        if (user.length === 0) {
            return `El usuario con el nombre ${name} no existe`
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
    }

    uploadNewUser = async (user) => {
        const allUsers = await this.users
        const idNew = allUsers[allUsers.length - 1].id + 1
        user.id = idNew
        this.users.push(user)
        return user
    }

    deleteUserById = async (id) => {
        const index = this.users.findIndex((e) => e.id == id)
        let resp
        if (index == -1) {
            resp = "El 'id' del usuario a borrar es incorrecto."
        } else {
            this.users.splice(index, 1)
            resp = "El usurio fue borrado exitosamente"
        }
        return resp
    }

    updateRestrictions = async (id, data) => {
        try {
            const restrictionsOk = ["vegan", "veggie", "gluten"]
            const restrictionsIn = data?.restricciones || [];
            const dataOk = restrictionsIn.every(e => restrictionsOk.includes(e));
            let resp;
            if (dataOk) {
                const index = await this.users.findIndex(u => u.id == id)
                if (index > -1) {
                    const newUser = { ...this.users[index], ...data }
                    this.users.splice(index, 1, newUser)
                    resp = newUser;
                } else {
                    resp = 'Id inválido';
                }
            } else {
                resp = 'Restricciones inválidas';
            }
            return await resp;
        } catch (error) {
            console.log(error);
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
                    resp = newUser;
                } else {
                    resp = 'Id inválido';
                }
            } else {
                throw new Error("La información que intenta agregar no existe.")
            }
            return resp;
        } catch (error) {
            console.error(error);
        }
    }

}

export default UsersModelMem