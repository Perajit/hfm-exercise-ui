import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Global error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error) && error.response) {
      if (error.response.status === 401 || error.response.status === 403) {
        window.location.href = '/auth';
      }

      // Expose server error info except server error 500
      if (error.response.status !== 500) {
        return Promise.reject(error.response.data);
      }
    }

    return Promise.reject(new Error());
  }
);

export default axiosInstance;
