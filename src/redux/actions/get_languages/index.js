import axios from "axios";
import ENDPOINTS from "../../../services/endpoints";
export const getAllLanguages = async () => {
  try {
    const datas = axios.get(`${ENDPOINTS.baseUrl}/${ENDPOINTS.getLanguages}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log("INI DATAS BRAY WKWKWK", datas);
  } catch (error) {}
};
