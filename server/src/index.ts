import express, { Request, Response } from "express";
import { pokeTypeDataResponse, mapPokeData } from "./types/types.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;
const typeAPICall = "https://pokeapi.co/api/v2/type/";

app.use(cors());
app.use(bodyParser.json());

app.get("/type", async (req: Request, res: Response) => {
  try {
    const pokeType = req.body.type;

    const data = await fetch(typeAPICall + pokeType);
    const returnedData: pokeTypeDataResponse = await data.json();
    const mappedPokeData = mapPokeData(returnedData);

    res.send(mappedPokeData.damageRelations);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log("Server running at PORT: ", PORT);
});
