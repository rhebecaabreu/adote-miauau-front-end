import axios from "axios";

const api = axios.create({
  baseURL: "http://api.adotemiauau.com.br/api",
});

api.defaults.headers.common["Content-Type"] = "application/json";
api.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default api;
