import express from "express";
import userController from "./controllers/user.controller.js";

const router = express.Router();

router.route('/users')
    .get(userController.getUsers)

router.route('/users/:id')
    .get(userController.getUser)

router.route('/users')
    .post(userController.createUser)

router.route('/users/:id')
    .put(userController.updateUser)

export default router;
