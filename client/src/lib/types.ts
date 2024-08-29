import BugIcon from "../assets/pokemonTypeIcons/Bug.png";
import DarkIcon from "../assets/pokemonTypeIcons/Dark.png";
import DragonIcon from "../assets/pokemonTypeIcons/Dragon.png";
import ElectricIcon from "../assets/pokemonTypeIcons/Electric.png";
import FightingIcon from "../assets/pokemonTypeIcons/Fighting.png";
import FireIcon from "../assets/pokemonTypeIcons/Fire.png";
import FlyingIcon from "../assets/pokemonTypeIcons/Flying.png";
import GhostIcon from "../assets/pokemonTypeIcons/Ghost.png";
import GrassIcon from "../assets/pokemonTypeIcons/Grass.png";
import GroundIcon from "../assets/pokemonTypeIcons/Ground.png";
import IceIcon from "../assets/pokemonTypeIcons/Ice.png";
import NormalIcon from "../assets/pokemonTypeIcons/Normal.png";
import PoisonIcon from "../assets/pokemonTypeIcons/Poison.png";
import PsychicIcon from "../assets/pokemonTypeIcons/Psychic.png";
import RockIcon from "../assets/pokemonTypeIcons/Rock.png";
import SteelIcon from "../assets/pokemonTypeIcons/Steel.png";
import WaterIcon from "../assets/pokemonTypeIcons/Water.png";

export const pokemonType = [
  {
    name: "Bug",
    image: BugIcon,
    type: "bug",
  },
  {
    name: "Dark",
    image: DarkIcon,
    type: "dark",
  },
  {
    name: "Dragon",
    image: DragonIcon,
    type: "dragon",
  },
  {
    name: "Electric",
    image: ElectricIcon,
    type: "electric",
  },
  {
    name: "Fighting",
    image: FightingIcon,
    type: "fighting",
  },
  {
    name: "Fire",
    image: FireIcon,
    type: "fire",
  },
  {
    name: "Flying",
    image: FlyingIcon,
    type: "flying",
  },
  {
    name: "Ghost",
    image: GhostIcon,
    type: "ghost",
  },
  {
    name: "Grass",
    image: GrassIcon,
    type: "grass",
  },
  {
    name: "Ground",
    image: GroundIcon,
    type: "ground",
  },
  {
    name: "Ice",
    image: IceIcon,
    type: "ice",
  },
  {
    name: "Normal",
    image: NormalIcon,
    type: "normal",
  },
  {
    name: "Poison",
    image: PoisonIcon,
    type: "poison",
  },
  {
    name: "Psychic",
    image: PsychicIcon,
    type: "psychic",
  },
  {
    name: "Rock",
    image: RockIcon,
    type: "rock",
  },
  {
    name: "Steel",
    image: SteelIcon,
    type: "steel",
  },
  {
    name: "Water",
    image: WaterIcon,
    type: "water",
  },
];

export interface pokeTypeDataResponse {
  doubleDamageFrom: [
    {
      name: string;
      url: string;
    }
  ];
  doubleDamageTo: [
    {
      name: string;
      url: string;
    }
  ];
  halfDamageFrom: [
    {
      name: string;
      url: string;
    }
  ];
  halfDamageTo: [
    {
      name: string;
      url: string;
    }
  ];
  noDamageFrom: [
    {
      name: string;
      url: string;
    }
  ];
  noDamageTo: [
    {
      name: string;
      url: string;
    }
  ];
}

export type pokemonTypes =
  | "bug"
  | "dark"
  | "dragon"
  | "electric"
  | "fighting"
  | "fire"
  | "flying"
  | "ghost"
  | "grass"
  | "ground"
  | "ice"
  | "normal"
  | "poison"
  | "psychic"
  | "rock"
  | "steel"
  | "water";
