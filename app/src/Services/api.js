export const getUsers = async () => {
  const response = await fetch("http://localhost:3005/users", {
    method: "GET",
  });
  const jsonData = await response.json();
  console.log(jsonData);
};

export const authenticateService = async (payload) => {
  const response = await fetch("http://localhost:3005/auth/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const result = await response.json();
  return result;
};

export const validateToken = async (token) => {
  const response = await fetch("http://localhost:3005/auth/validate", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: token,
    },
  });

  if (response.status !== 200) {
    return false;
  }
  return true;
};
