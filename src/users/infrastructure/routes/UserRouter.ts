import express from "express";
import { createUserController } from "../dependency/DependenciesUser";
import { getUserByUsernameController } from "../dependency/DependenciesUser";

export const userRouter = express.Router();

userRouter.post("/", createUserController.run.bind(createUserController));
userRouter.post("/:username", getUserByUsernameController.run.bind(getUserByUsernameController));