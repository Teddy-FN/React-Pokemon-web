import INDONESIA_FLAG from "assets/img/indonesia-flag.png";
import USA_FLAG from "assets/img/united-states-flag.png";
import JAPAN_FLAG from "assets/img/japan.png";

export const NATIONAL_LANGUAGE = [
  {
    img: INDONESIA_FLAG,
    name: "Indonesia",
    value: "id",
  },
  {
    img: USA_FLAG,
    name: "U.S.A",
    value: "en",
  },
  {
    img: JAPAN_FLAG,
    name: "Japan",
    value: "jpn",
  },
] as const;

export const selectCountPokemon = [5, 10, 15, 20, 25, 30, 35, 40] as const;

export const backgroundColoring = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};
