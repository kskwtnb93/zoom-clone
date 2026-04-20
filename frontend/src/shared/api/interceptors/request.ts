import type { InternalAxiosRequestConfig } from "axios";

export const addAuthorizationHeader = (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("token");

  if (!token) return config;

  config.headers.Authrization = `Bearer ${token}`;

  return config;
};
