import axios from "axios";

// Create an instance of Axios with custom configuration
const apiInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API}/`,
  timeout: 5000, // Request timeout in milliseconds
});

apiInstance.interceptors.request.use(
  (config) => {
    // Modify the request config, e.g., add headers
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

export default apiInstance;
