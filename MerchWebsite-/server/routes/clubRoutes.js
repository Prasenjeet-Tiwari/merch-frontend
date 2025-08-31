import express from "express";
import {
  createClub,
  getClubs,
  getClubById,
  updateClub,
  deleteClub,
  getClubByName
} from "../controllers/clubControllers.js";

const clubRouter = express.Router();

clubRouter.post("/", createClub);
clubRouter.get("/", getClubs);
clubRouter.get("/:id", getClubById);
clubRouter.get("/:name", getClubByName);
clubRouter.put("/:id", updateClub);
clubRouter.delete("/:id", deleteClub);

export {clubRouter}