import axios, { AxiosResponse } from "axios";
import ENDPOINTS from "services/endpoints";

const getPokemonBerryList = async (
  offset: number,
  limit: number,
): Promise<AxiosResponse> => {
  const { data, status } = await axios.get(
    `${ENDPOINTS.baseUrl}/${ENDPOINTS.getBerry}?offset=${offset}&limit=${limit}`,
  );

  if (status !== 200) throw new Error(`[getPokemonBerryList] ${status}`);

  return data;
};

export default {
  getPokemonBerryList,
};
