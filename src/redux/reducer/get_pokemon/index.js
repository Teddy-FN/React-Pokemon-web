import * as types from "../../types";

const initalState = {
  data: [],
  loading: false,
  error: false,
};

export const getAllDatasPokemon = (state = initalState, action) => {
  switch (action.type) {
    case types.SUCCESS_GET_ALL_POKEMON: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        erorr: false,
      };
    }
    case types.LOADING_GET_ALL_POKEMON: {
      return {
        ...state,
        data: [],
        loading: true,
        error: false,
      };
    }
    case types.FAILED_GET_ALL_POKEMON: {
      return {
        loading: false,
        error: true,
      };
    }

    default:
      return { ...state };
  }
};
