import { Request, Response } from "express";

export const getChuckNorrisJokeController = async (
  req: Request,
  res: Response
) => {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  console.log("Fetch response");
  console.log(response);

  const data = await response.json();
  console.log("Parsed json data");
  console.log(data);

  res.json({ joke: data.value });
};
