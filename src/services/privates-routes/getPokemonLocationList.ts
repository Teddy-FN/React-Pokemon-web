import axios, { AxiosResponse } from "axios";
import ENDPOINTS from "services/endpoints";

const getPokemonLocationList = async (
  offset: number,
): Promise<AxiosResponse> => {
  const { data, status } = await axios.get(
    `${ENDPOINTS.baseUrl}/${ENDPOINTS.getLocation}?offset=${offset}&limit=20`,
  );

  if (status !== 200) throw new Error(`[getPokemonLocationList] ${status}`);
  return data;
};

export default {
  getPokemonLocationList,
};
