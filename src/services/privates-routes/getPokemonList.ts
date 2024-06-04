import axios, { AxiosResponse } from "axios";
import ENDPOINTS from "services/endpoints";

const getPokemonList = async (pagination: number): Promise<AxiosResponse> => {
  const { data, status } = await axios.get(
    `${ENDPOINTS.baseUrl}/${ENDPOINTS.getPokemon}?offset=${pagination}&limit=20`,
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
