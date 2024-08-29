import { useState } from "react";
import { pokemonType } from "./lib/types";
import { fetchPokemonType } from "./lib/hooks/hooks";
import { useQuery } from "@tanstack/react-query";

function App() {
  const [selectedType, setSelectedType] = useState<string>("bug");
  const [data, error, isLoading] = useFetchType(selectedType);

  const handleClick = (type: string) => {
    if (type && selectedType) {
      setSelectedType(type);
    }
  };

  if (error) return <div>An error was found.</div>;

  return (
    <main className="min-h-screen bg-zinc-900 pb-10">
      <h1 className="text-5xl text-center font-bold pt-10 text-white">
        Pokeffective
      </h1>
      <div className="grid grid-cols-4 grid-rows-3  gap-6 mt-10 p-10 sm:justify-center place-content-center">
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
      <div className="flex flex-col gap-y-10">
        <div className="text-white text-center">
          {selectedType} <span className="text-green-400">deals</span> double
          damage <span className="text-green-400">to</span>{" "}
          <div className="flex flex-row gap-x-5 justify-center">
            {isLoading ? (
              <div>🌀</div>
            ) : (
              data?.doubleDamageTo.map((item) => (
                <div key={item.name} className="text-[24px]">
                  {item.name}
                </div>
              ))
            )}
          </div>
        </div>
        <div className="text-white text-center">
          {selectedType} <span className="text-red-400">takes</span> double
          damage <span className="text-red-400">from</span>{" "}
          <div className="flex flex-row gap-x-5 justify-center">
            {isLoading ? (
              <div>🌀</div>
            ) : (
              data?.doubleDamageFrom.map((item) => (
                <div key={item.name} className="text-[24px]">
                  {item.name}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

const useFetchType = (type: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["type", type],
    queryFn: () => fetchPokemonType(type),
  });

  return [data, error, isLoading] as const;
};
