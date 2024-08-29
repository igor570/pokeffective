import { pokeTypeDataResponse } from "../lib/types";

interface PokeEffectInfoProps {
  selectedType: string;
  isLoading: boolean;
  data: pokeTypeDataResponse | null | undefined;
  isDamageTo?: boolean;
}

export const PokeEffectInfo = ({
  selectedType,
  isLoading,
  data,
  isDamageTo,
}: PokeEffectInfoProps) => {
  if (isDamageTo) {
    return (
      <div className="text-white text-center pt-2">
        {selectedType} <span className="text-green-400">deals</span> double
        damage <span className="text-green-400">to</span>{" "}
        <div className="flex flex-row gap-x-3 justify-center">
          {isLoading ? (
            <div>🌀</div>
          ) : (
            data?.doubleDamageTo?.map((item) => (
              <div key={item.name} className="text-[20px] pt-2">
                {item.name}
              </div>
            ))
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="text-white text-center pt-8">
      {selectedType} <span className="text-red-400">takes</span> double damage{" "}
      <span className="text-red-400">from</span>{" "}
      <div className="flex flex-row gap-x-3 justify-center">
        {isLoading ? (
          <div>🌀</div>
        ) : (
          data?.doubleDamageFrom?.map((item) => (
            <div key={item.name} className="text-[20px] pt-2">
              {item.name}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
