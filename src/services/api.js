import axios from "axios";

const api = axios.create({
  baseURL: "https://api.adotemiauau.com.br/api",
});

// const api = axios.create({
//   baseURL: "http://localhost:3000/api",
// });

api.defaults.headers.common["Content-Type"] = "application/json";
api.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default api;
