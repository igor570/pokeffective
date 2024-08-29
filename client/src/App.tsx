import { useState } from "react";
import { fetchPokemonType } from "./lib/hooks/hooks";
import { useQuery } from "@tanstack/react-query";
import { Header, PokeIconsGrid, PokeEffectInfo, Footer } from "./components";

const useFetchType = (type: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["type", type],
    queryFn: () => fetchPokemonType(type),
  });

  return [data, error, isLoading] as const;
};

const App = () => {
  const [selectedType, setSelectedType] = useState<string>("bug");
  const [data, error, isLoading] = useFetchType(selectedType);

  const handleClick = (type: string) => {
    if (type && selectedType) {
      setSelectedType(type);
    }
  };

  if (error) return <div>An error was found.</div>;

  return (
    <main className="min-h-screen w-full bg-zinc-900 pb-10">
      <Header />
      <PokeIconsGrid handleClick={handleClick} />
      <PokeEffectInfo
        selectedType={selectedType}
        isLoading={isLoading}
        data={data}
        isDamageTo={true}
      />
      <PokeEffectInfo
        selectedType={selectedType}
        isLoading={isLoading}
        data={data}
      />
      <Footer />
    </main>
  );
};

export default App;
