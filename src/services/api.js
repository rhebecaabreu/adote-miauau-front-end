import axios from "axios";

const api = axios.create({
  baseURL: "http://147.182.229.211/api",
});

api.defaults.headers.common["Content-Type"] = "application/json";
api.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default api;
