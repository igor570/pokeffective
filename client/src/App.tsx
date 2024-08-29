import { useState } from "react";
import { pokemonType } from "./lib/types";
import { fetchPokemonType } from "./lib/hooks/hooks";
import { useQuery } from "@tanstack/react-query";

function App() {
  const [selectedType, setSelectedType] = useState<string>("bug");
  const [data, error] = useFetchType(selectedType);

  const handleClick = (type: string) => {
    if (type && selectedType) {
      setSelectedType(type);
    }
  };

  if (error) return <div>An error was found.</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <main className="h-screen bg-zinc-900">
      <h1 className="text-5xl text-center font-bold pt-20 text-white">
        Pokeffective
      </h1>
      <div className="grid grid-cols-4 grid-rows-3  gap-6 mt-20 p-10 sm:justify-center place-content-center">
        {pokemonType.map((type, index) => (
          <div
            key={index}
            style={{ width: "60px", height: "80px", margin: "auto" }}
          >
            <img
              src={type.image}
              alt="pokemontype"
              width={60}
              height={60}
              onClick={() => handleClick(type.type)}
            />
            <div className="text-center mt-1 w-[60px] text-white">
              {type.name}
            </div>
          </div>
        ))}
      </div>
      <div className="text-white text-center">
        {selectedType} takes double damage from{" "}
        {data?.doubleDamageFrom.map((item) => (
          <div className="text-2xl">{item.name}</div>
        ))}
      </div>
    </main>
  );
}

export default App;

const useFetchType = (type: string) => {
  const { data, error } = useQuery({
    queryKey: ["type", type],
    queryFn: () => fetchPokemonType(type),
  });

  return [data, error] as const;
};
