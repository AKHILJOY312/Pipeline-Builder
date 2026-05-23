// src/shared/constants/apiRoutes.js

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export const API_ROUTES = {
  BASE: API_BASE_URL,
  PIPELINES: {
    PARSE: `${API_BASE_URL}/pipelines/parse`,
  },
};
