
import axios from "axios";
import { STUDENT_API } from "@/lib/config/apiURL";


export const getAllStudents = async (params = {}) => {
  try {
    const res = await axios.get(STUDENT_API, { params });
    return Array.isArray(res.data) ? res.data : [];
  } catch (error) {
    console.error("Error fetching all student:", error);
    return [];
  }
};

export const getStudentDetails = async (id) => {
  try {
    const res = await axios.get(`${STUDENT_API}/${id}`);
    return res.data || null;
  } catch (error) {
    console.error(`Error fetching student ${id}:`, error);
    return null;
  }
};

export const getLatestStudents = async () => {
  try {
    const res = await axios.get(STUDENT_API, { 
      params: { 
        limit: 4, 
        sort: 'createdAt' 
      } 
    });
    return Array.isArray(res.data) ? res.data : [];
  } catch (error) {
    console.error("Error fetching latest students:", error);
    return [];
  }
};
