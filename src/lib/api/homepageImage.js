import axios from "axios";
import { HERO_API } from "../config/apiURL";

export const getHeroImages=  async () => {
  try {
    const response = await axios.get(HERO_API);
    if (Array.isArray(response.data)) {
      return response.data;
    } else if (response.data && Array.isArray(response.data.data)) {
      return response.data.data;
    }
    return [];
  } catch (error) {
    console.error("Error fetching hero images:", error);
    return [];
  }
}