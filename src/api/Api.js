import axios from "axios";

export const API_URL = "https://a27684-abed.t.d-f.pw/api";
const $api = axios.create({
  baseURL: API_URL,
});
export default $api;
