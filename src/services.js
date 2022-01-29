import { API_URL } from "./constants";

export const getColors = () => {
  return fetch(`${API_URL}/colors`).then((res) => res.json());
};

export const submit = (payload) => {
  return fetch(`${API_URL}/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
};
