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
