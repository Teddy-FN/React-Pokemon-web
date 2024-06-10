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
