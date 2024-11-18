import generator from "../utils/generator.js"
import { expect } from "chai"
import supertest from "supertest"

const urlBase = supertest("http://localhost:8080")


describe('Test de usuarios: ', () => {
    const data = generator.randomUser()

    it('GET Users', async () => {
        const response = await urlBase.get("/users/users")
        expect(response.status).to.equal(200)
    })

    it('POST Users - admin', async () => {
        const response = await urlBase.post("/users/newUser").set('rol', 'user').send(data)
        expect(response.status).to.equal(200)
    })

    it('POST Users - user', async () => {
        const response = await urlBase.post("/users/newUser").set('rol', 'user').send(data)
        expect(response.status).to.equal(200)
    })
    
    it('updateRestrictions Correct', async () => {
        const response = await urlBase.patch("/users/update/restrictions/673ab0a512923e621784c85a").send(data)
        expect(response.status).to.equal(200)
    })


})