/**
 * @swagger
 * /users/users:
 *   get:
 *     summary: Traer todos los usuarios
 *     parameters:
 *       - name: role
 *         in: header
 *         required: true
 *         description: Se necesita rol "admin" para realizar la query.
 *         schema:
 *           type: string
 *           example: admin
 *     responses:
 *       200:
 *         description: Operación exitosa.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                  {
 *                      "_id": "6737b35bf7320a530ade235b",
 *                      "username": "admin",
 *                      "pass": "admin",
 *                      "nombre": "algo",
 *                      "apellido": "apellido",
 *                      "informacion": "info",
 *                      "pronombre": "",
 *                      "favoritos": [],
 *                      "restricciones": [],
 *                      "rol": "admin"
 *                  }
 */














import UsersController from '../controllers/users.controller.js';
import express from 'express'
import { roleAuth } from '../middleware/roleAuth.js';

class UsersRouter {
    constructor() {
        this.controller = new UsersController();
        this.router = new express.Router();
    }

    start() {
        this.router.get("/id/:id", this.controller.getUserById)
        this.router.get("/users", roleAuth, this.controller.getAllusers)
        this.router.get("/username/:name", this.controller.getUserByUsername)
        this.router.delete("/delete/:id", this.controller.deleteUserById)
        this.router.get("/rol/:rol", this.controller.getUsersByRol)
        this.router.post("/newUser", this.controller.uploadNewUser)
        this.router.patch("/update/restrictions/:id", this.controller.updateRestrictions)
        this.router.patch("/update/:id", this.controller.updateUser)

        return this.router;
    }
}

export default UsersRouter;