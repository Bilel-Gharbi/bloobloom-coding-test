import axios from "axios";
import constants from "./constants";

const { apiBaseUrl } = constants;
const request = axios.create({
  baseURL: apiBaseUrl,
  headers: { "X-Custom-Header": "foobar" },
});
request.interceptors.response.use(
  (res) => res.data,
  (err) => {
    if (err.response.status === 404)
      throw new Error(`${err.config.url} not found`);
    throw err;
  }
);

request.interceptors.request.use((request) => {
  const { NODE_ENV } = process.env;
  if (NODE_ENV === "development")
    console.log(`${request.method} ${request.url}`);
  return request;
});

export default request;
