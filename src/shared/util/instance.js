import axios from "axios";
import { getCookie } from "./cookie";

export const instance = axios.create({
  baseURL: "https://tube-tuning.com/api",
  headers: { authorization: `Bearer ${getCookie("token")}` },
});
