import { combineReducers } from "redux";
import { getAllDatasPokemon } from "./get_pokemon";

const combinedReducers = combineReducers({
  getAllDatasPokemon,
});

export const rootReducer = (state, action) => {
  return combinedReducers(state, action);
};
