import axios, { AxiosResponse } from "axios";
import ENDPOINTS from "services/endpoints";

const getPokemonGameList = async (): Promise<AxiosResponse> => {
  const { data, status } = await axios.get(
    `${ENDPOINTS.baseUrl}/${ENDPOINTS.getGeneration}?offset=${0}&limit=20`,
  );

  if (status !== 200) throw new Error(`[getPokemonGameList], ${status}`);

  return data;
};

export default {
  getPokemonGameList,
};
