import generator from "../utils/generator.js"
import { expect } from "chai"
import supertest from "supertest"

const urlBase = supertest("http://localhost:8080")


describe('Test de usuarios: ', () => {
    const data = generator.randomUser()

    it('GET Users - admin', async () => {
        const response = await urlBase.get("/users/users").set('role', 'admin')
        expect(response.status).to.equal(200)
    })

    it('GET Users - user', async () => {
        const response = await urlBase.get("/users/users").set('role', 'user')
        expect(response.status).to.equal(403)
    })

    it('POST Users ', async () => {
        const response = await urlBase.post("/users/newUser").send(data)
        expect(response.status).to.equal(200)
    })

    it('updateRestrictions OK', async () => {
        const response = await urlBase.patch("/users/update/restrictions/673ab0a512923e621784c85a").send(data)
        expect(response.status).to.equal(200)
    })


})