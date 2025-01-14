import baseService from "./baseService";
export const login = (data) => {
  return baseService
    .post("/login", data)
    .then((res) => [null, res.data])
    .catch((error) => [error, null]);
};

export const fetchMyProfile = () => {
  const token = localStorage.getItem("token");
  return baseService
    .get("/me",{headers: { Authorization: `Bearer ${token}` }})
    .then((res) => [null, res.data])
    .catch((error) => [error, null]);
};
