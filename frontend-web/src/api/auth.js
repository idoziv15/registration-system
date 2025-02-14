import axios from "axios";

const API_URL = "http://localhost";
// const API_URL = process.env.API_URL;

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const register = async (email, username, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { email, username, password });
    return response.data;
  } catch (error) {
    console.error("Registration failed:", error);
    throw error;
  }
};
