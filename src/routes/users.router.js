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
        this.router.get("/name/:name", this.controller.getUserByName)
        this.router.delete("/delete/:id", this.controller.deleteUserById)
        this.router.get("/rol/:rol", this.controller.getUsersByRol)
        this.router.post("/newUser", this.controller.uploadNewUser)
        this.router.patch("/update/restrictions/:id", this.controller.updateRestrictions)
        this.router.patch("/update/:id", this.controller.updateUser)

        return this.router;
    }
}

export default UsersRouter;