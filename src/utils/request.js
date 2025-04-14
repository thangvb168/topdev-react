import axios from 'axios';

const API_BASE_URL = 'https://67ee152e4387d9117bbf4f07.mockapi.io/api/v1/';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
});

const request = {
  get: async url => {
    try {
      const response = await axiosInstance.get(url);
      console.log('Url:', url);
      console.log('Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },
};

export default request;
