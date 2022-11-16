import axios from "axios";

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AUTH_HOST_URL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
