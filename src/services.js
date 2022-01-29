import { API_URL } from "./constants";

export const getColors = () => {
  return fetch(`${API_URL}/colors`).then((res) => res.json());
};

export const submit = () => {
  return fetch(`${API_URL}/submit`).then((res) => res.json());
};
