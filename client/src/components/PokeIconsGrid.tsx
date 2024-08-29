import { pokemonType } from "../lib/types";

interface PokeIconsGridProps {
  handleClick: (type: string) => void;
}

export const PokeIconsGrid = ({ handleClick }: PokeIconsGridProps) => {
  return (
    <div className="grid grid-cols-4 grid-rows-3 sm:max-w-2xl mx-auto gap-8 mt-10 p-10 sm:justify-center place-content-center">
      {pokemonType.map((type, index) => (
        <div
          key={index}
          className="w-[60px] h-[80px] m-auto hover:scale-105 active:scale-95 transition-transform cursor-pointer"
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
  );
};
