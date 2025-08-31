import express from "express";
import { createUser, getUsers } from "../controllers/userControllers.js";

const userRouter = express.Router();

userRouter.post("/createUser", createUser);
userRouter.get("/getUsers", getUsers);

export {userRouter};
