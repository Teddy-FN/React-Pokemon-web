import axios from "axios";
import ENDPOINTS from "../../../services/endpoints";
export const getAllDatasPokemon = async () => {
  console.log("HELLO");
  console.log(ENDPOINTS);
  try {
    const data = await axios.get(`${ENDPOINTS.baseUrl}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log("INI DATA BRAY WKWKW", data);
  } catch (error) {}
};
