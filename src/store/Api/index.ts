import Axios from "axios";

const baseURL = "http://localhost:8000";
const instance = Axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
  },
});

export default instance;
