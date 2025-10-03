import axios from "axios";
import { EVENT_API } from "../config/apiURL";

export const getAllFestivals = async () => {
  try {
    const response = await axios.get(`${EVENT_API}/festivals/`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching all festivals:", error);
    return [];
  }
};

export const getFestivalById = async (id) => {
  try {
    const response = await axios.get(`${EVENT_API}/festivals/${id}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching festival by id:", error);
    return null;
  }
};

export const getAllActivities = async () => {
  try {
    const response = await axios.get(`${EVENT_API}/activities`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all activities:", error);
    return [];
  }
};

export const getActivitieById = async (id) => {
  try {
    const response = await axios.get(`${EVENT_API}/activities/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching activity by id:", error);
    return null;
  }
};

export const getAllFarewells = async () => {
  try {
    const response = await axios.get(`${EVENT_API}/farewells`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all farewells:", error);
    return [];
  }
};

export const getFarewellById = async (id) => {
  try {
    const response = await axios.get(`${EVENT_API}/farewells/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching farewell by id:", error);
    return null;
  }
};

export const getAllFreshersInductions = async () => {
  try {
    const response = await axios.get(`${EVENT_API}/freshersInductions`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all Freshers Inductions:", error);
    return [];
  }
};

export const getFreshersInductionById = async (id) => {
  try {
    const response = await axios.get(`${EVENT_API}/freshersInductions/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Fresher's Induction by Id:", error);
    return null;
  }
};

// export const getAllPrograms = async () => {
//       try {
//     const response = await axios.get(`${EVENT_API}/activities/:id/programs`);
//   } catch (error) {
//     console.error("Error fetching all programs:", error);
//     return [];
//   }
// };

// export const getProgramById = async () => {
//       try {
//     const response = await axios.get(`${EVENT_API}/activities/:id/programs/:id`);
//   } catch (error) {
//     console.error("Error fetching programs by id:", error);
//     return [];
//   }
// };
