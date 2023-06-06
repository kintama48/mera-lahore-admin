const login = (email, password) => {
  if (
    email.toLowerCase() === "admin@meralahore.com" &&
    password === "meraLahoreAdmin123"
  ) {
    localStorage.setItem("token", "admin");
    return true;
  }
  return false;
};

const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

export default { login, logout };
