import axios, { AxiosResponse } from "axios";
import ENDPOINTS from "services/endpoints";

const getPokemonList = async (
  pagination: number,
  limit: number,
): Promise<AxiosResponse> => {
  const { data, status } = await axios.get(
    `${ENDPOINTS.baseUrl}/${ENDPOINTS.getPokemon}?offset=${pagination}&limit=${limit}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );

  if (status !== 200) throw new Error(`[getPokemonList] ${status}`);
  return data;
};

export default {
  getPokemonList,
};
