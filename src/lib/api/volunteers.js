
import axios from "axios";
import { VOLUNTEER_API } from "@/lib/config/apiURL";


export const getAllVolunteers = async (params = {}) => {
  try {
    const res = await axios.get(VOLUNTEER_API, { params });
    return Array.isArray(res.data) ? res.data : [];
  } catch (error) {
    console.error("Error fetching all volunteer:", error);
    return [];
  }
};

export const getVolunteerDetails = async (id) => {
  try {
    const res = await axios.get(`${VOLUNTEER_API}/${id}`);
    return res.data || null;
  } catch (error) {
    console.error(`Error fetching volunteer ${id}:`, error);
    return null;
  }
};
