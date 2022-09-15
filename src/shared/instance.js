import React from "react";
import axios from "axios";
import { getCookie } from "../hooks/cookie";

export const instance = axios.create({
  baseURL: "https://tube-tuning.com/api",
  headers: { authorization: `Bearer ${getCookie("token")}` },
});
