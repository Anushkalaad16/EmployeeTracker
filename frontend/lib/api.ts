const BASE_URL = "http://localhost:5000/api";

export const apiRequest = async (
  endpoint: string,
  method: string,
  body?: any
) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers: {
        "Cache-Control": "no-cache",
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  return res.json();
};  