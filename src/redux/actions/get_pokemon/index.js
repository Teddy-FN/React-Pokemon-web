import axios from "axios";
import ENDPOINTS from "../../../services/endpoints";
import {
  SUCCESS_GET_ALL_POKEMON,
  LOADING_GET_ALL_POKEMON,
  FAILED_GET_ALL_POKEMON,
} from "../../types";

export const setError = (value) => {
  return {
    type: FAILED_GET_ALL_POKEMON,
    payload: value,
  };
};

export const setLoading = (value) => {
  return {
    type: LOADING_GET_ALL_POKEMON,
    payload: value,
  };
};

export const setData = (value) => {
  return {
    type: SUCCESS_GET_ALL_POKEMON,
    payload: value,
  };
};

export const getAllDatasPokemon = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${ENDPOINTS.baseUrl}/${ENDPOINTS.getPokemon}`,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      console.log("INI RES BRAY WKWKW", res);
      const { next } = res.data;
      const { results } = res.data;
      console.log("INI result LHOO BRAY WWKWKWK", results);
      dispatch(setData(res.data));
      console.log("INI next LHOO BRAY WWKWKWK", results);
    } catch (error) {}
  };
};
