import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const https = () => {
  const client = axios.create({
    baseURL: BASE_URL,
  });

  client.interceptors.response.use(undefined, (error) => {
    throw error;
  });

  return client;
};

export default https;
