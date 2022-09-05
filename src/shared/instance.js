import React from "react";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://www.myspaceti.me/api",
});
