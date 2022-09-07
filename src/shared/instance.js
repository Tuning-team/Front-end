import React from "react";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://tube-tuning.com/api",
});
