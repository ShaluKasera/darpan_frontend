
import axios from "axios";
import { ALUMNI_API } from "@/lib/config/apiURL";


export const getAllAlumni = async (params = {}) => {
  try {
    const res = await axios.get(ALUMNI_API, { params });
    return Array.isArray(res.data) ? res.data : [];
  } catch (error) {
    console.error("Error fetching all alumni:", error);
    return [];
  }
};

export const getAlumniDetails = async (id) => {
  try {
    const res = await axios.get(`${ALUMNI_API}/${id}`);
    return res.data || null;
  } catch (error) {
    console.error(`Error fetching alumni ${id}:`, error);
    return null;
  }
};
