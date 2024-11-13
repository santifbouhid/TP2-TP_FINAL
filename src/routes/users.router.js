import UsersController from '../controllers/users.controller.js';
import express from 'express'

class UsersRouter {
    constructor() {
        this.controller = new UsersController();
        this.router = new express.Router();
    }

    start(){

        this.router.get("/users", this.controller.getAllusers)
        this.router.get("/users/:name", this.controller.getUserByName)

        return this.router;
    }
}

export default UsersRouter;