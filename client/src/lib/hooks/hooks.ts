import { pokeTypeDataResponse } from "../types";

export const fetchPokemonType = async (
  type: string
): Promise<pokeTypeDataResponse | null> => {
  try {
    const url = `http://localhost:3000/type`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type }),
    });

    if (res.status === 204) {
      console.warn("No content returned");
      return null;
    }

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: pokeTypeDataResponse | null = await res.json();
    console.log("Data received from server:", data);
    return data || null;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};
