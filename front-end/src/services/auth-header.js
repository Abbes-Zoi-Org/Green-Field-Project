// Checks Local Storage for user item.
// If there is a logged in user with token (JWT), return HTTP Authorization header.
// Otherwise, return an empty object.

export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("users"));
  if (user && user.token) {
    return { "x-access-token": user.token };
  } else {
    return {};
  };
};
