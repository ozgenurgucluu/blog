import baseService from "@/services/baseService";

export const fetchAllCategoriesService = () => {
  return baseService
    .get("/categories")
    .then((res) => [null, res.data])
    .catch((error) => [error, null]);
};
