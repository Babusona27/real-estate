import { BASE_URL } from "./urls";

export const PostApiFetch = async (URL, formData, token) => {
  console.log('token', token);
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `${token}`
  };
  console.log('headers', headers);
  return await fetch(BASE_URL + URL, {
    method: "POST",
    headers: headers,
    body: formData,
  }).then((response) => {
    const statusCode = response.status;
    const data = response.json();
    return Promise.all([statusCode, data]);
  });
};

export const GetApiFetch = async (URL, params = "") => {
  return await fetch(BASE_URL + URL + params, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  }).then((response) => {
    const statusCode = response.status;
    const data = response.json();
    return Promise.all([statusCode, data]);
  });
};
