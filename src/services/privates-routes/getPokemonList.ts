import axios, { AxiosResponse } from "axios";
import ENDPOINTS from "services/endpoints";

const getPokemonList = async (): Promise<AxiosResponse> => {
  const { data, status } = await axios.get(
    `${ENDPOINTS.baseUrl}/${ENDPOINTS.getPokemon}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );

  if (status !== 200) throw new Error(`[getDropdownAssignTo] ${status}`);
  return data;
};

export default {
  getPokemonList,
};
