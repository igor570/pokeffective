import express, { Request, Response } from "express";
import { pokeTypeDataResponse, mapPokeData } from "./types/types.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.post("/type", async (req: Request, res: Response) => {
  try {
    // Read the 'type' property from req.body
    const pokeType = req.body.type as string;
    console.log(pokeType);

    // Perform your API call and other processing here
    const data = await fetch(`https://pokeapi.co/api/v2/type/${pokeType}`);

    const returnedData: pokeTypeDataResponse = await data.json();

    const mappedPokeData = mapPokeData(returnedData);

    // Send the response
    res.json(mappedPokeData.damageRelations);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log("Server running at PORT: ", PORT);
});
