import { faker } from "@faker-js/faker";

const randomUser = () => {
    const user = {
        username: faker.internet.username(),
        pass: faker.internet.password(),
        nombre: faker.person.firstName(),
        apellido: faker.person.lastName(),
        informacion: faker.person.bio(),
        pronombre: faker.person.prefix(),
        favoritos: [],
        restricciones: faker.helpers.arrayElements(['veggie', 'vegan', 'gluten'], { min: 0, max: 3 }),
        rol: faker.helpers.arrayElement(['user', 'admin'])
    }
    return user
}

export default {
    randomUser
}

