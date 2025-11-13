import express from "express";
import { jokesRouter } from "./routes/jokes.route";

export const app = express();

app.use(jokesRouter);

app.listen(3000, () =>
  console.log("Web server is working and listening to port 3000!")
);
