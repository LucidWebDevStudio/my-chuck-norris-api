import { Router } from "express";
import { getChuckNorrisJokeController } from "../controllers/get-chuck-norris-joke.controller";

export const jokesRouter = Router();

jokesRouter.get("/", getChuckNorrisJokeController);
