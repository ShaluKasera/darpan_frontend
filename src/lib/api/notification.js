import axios from "axios";
import { NOTIFICATION_API } from "../config/apiURL";

export const getNotifications = async () => {
  try {
    const response = await axios.get(NOTIFICATION_API);
    return response.data;
  } catch (error) {
    console.error("Error fetching notifications :", error);
    throw error;
  }
};
