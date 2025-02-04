import baseService from "@/services/baseService";

export const fetchAllCategoriesService = () => {
  return baseService
    .get("/categories")
    .then((res) => [null, res.data])
    .catch((error) => [error, null]);
};

export const fetchCategoryBySlug = (slug) => {
  return baseService
    .get(`/categories/${slug}`)
    .then((res) => [null, res.data])
    .catch((error) => [error, null]);
};

export const createCategory = (data) => {
  const token = localStorage.getItem("token");

  return baseService
    .post("/categories", data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => [null, res.data])
    .catch((err) => [err, null]);
};

export const updateCategory = (id, data) => {
  const token = localStorage.getItem("token");

  return baseService
    .put(`/categories/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => [null, res.data])
    .catch((err) => [err, null]);
};

export const deleteCategory = (id) => {
  const token = localStorage.getItem("token");
  return baseService
    .delete(`/categories/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => [null, res.data])
    .catch((error) => [error, null]);
};
