import axios from "axios";

/**
 * Configure axios base Url 
 */
export const axiosCreator = axios.create({
    baseURL: 'http://localhost:4000/api'
  });