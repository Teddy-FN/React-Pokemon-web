import { combineReducers } from "redux";
import { getAllDatasPokemon } from "./get_pokemon";

const rootReducers = combineReducers({
  getAllDatasPokemon,
});

export default rootReducers;
