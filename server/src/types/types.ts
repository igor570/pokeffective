export interface pokeTypeDataResponse {
  damage_relations: {
    double_damage_from: [
      {
        name: string;
        url: string;
      }
    ];
    double_damage_to: [
      {
        name: string;
        url: string;
      }
    ];
    half_damage_from: [
      {
        name: string;
        url: string;
      }
    ];
    half_damage_to: [
      {
        name: string;
        url: string;
      }
    ];
    no_damage_from: [
      {
        name: string;
        url: string;
      }
    ];
    no_damage_to: [
      {
        name: string;
        url: string;
      }
    ];
  };
}

export const mapPokeData = (response: pokeTypeDataResponse) => {
  return {
    damageRelations: {
      doubleDamageFrom: response.damage_relations.double_damage_from,
      doubleDamageTo: response.damage_relations.double_damage_to,
      halfDamageFrom: response.damage_relations.half_damage_from,
      halfDamageTo: response.damage_relations.half_damage_to,
      noDamageFrom: response.damage_relations.no_damage_from,
      noDamageTo: response.damage_relations.no_damage_to,
    },
  };
};
