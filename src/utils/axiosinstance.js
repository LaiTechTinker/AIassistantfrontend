import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Add auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle responses and errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;
      
      // Handle 401 Unauthorized - Token expired or invalid
      if (status === 401) {
        // Clear stored auth data
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        
        // Redirect to login if not already there
        if (!window.location.pathname.includes("/login")) {
          window.location.href = "/login";
        }
      }
      
      // Return structured error
      return Promise.reject({
        status,
        message: data?.message || "An error occurred",
        data
      });
    } else if (error.request) {
      // Network error
      return Promise.reject({
        status: 0,
        message: "Network error. Please check your connection."
      });
    } else {
      return Promise.reject({
        status: 0,
        message: error.message || "Unknown error occurred"
      });
    }
  }
);

export default api;
