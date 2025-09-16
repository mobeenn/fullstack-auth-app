import axios from "axios";

const API = axios.create({
   baseURL: import.meta.env.VITE_API_BASE_URL,
});

// signup api
export const registerUser = async (formData) => {
   try {
      const response = await API.post("/auth/register", formData);
      return response.data;
   } catch (error) {
      throw error.response?.data || { message: "Server error" };
   }
};
// login api
export const loginUser = async (userData) => {
   try {
      const res = await API.post("/auth/login", userData);
      return res.data;
   } catch (error) {
      if (error.response && error.response.data) {
         throw new Error(error.response.data.message);
      } else {
         throw new Error("Something went wrong");
      }
   }
};
