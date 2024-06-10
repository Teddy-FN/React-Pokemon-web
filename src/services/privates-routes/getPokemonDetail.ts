import axios, { AxiosResponse } from "axios";
import ENDPOINTS from "services/endpoints";

const getPokemonDetail = async (id: number): Promise<AxiosResponse> => {
  const { data, status } = await axios.get(
    `${ENDPOINTS.baseUrl}/${ENDPOINTS.getPokemon}/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );

  if (status !== 200) throw new Error(`[getPokemonDetail] ${status}`);
  return data;
};

export default {
  getPokemonDetail,
};
