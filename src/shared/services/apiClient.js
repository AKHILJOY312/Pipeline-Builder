import axios from "axios";
import { API_ROUTES } from "../constants/apiRoutes";
import { normalizeApiError } from "../utils/normalizeApiError";

export const apiClient = axios.create({
  baseURL: API_ROUTES.BASE,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(normalizeApiError(error)),
);
