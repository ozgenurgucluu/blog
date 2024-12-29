import baseService from "./baseService.js";

export const fetchAllTagService = () => {
  return baseService
    .get("/tags")
    .then((res) => [null, res.data])
    .catch((err) => [err, null]);
};

export const fetchTagBySlug = (slug) => {
  return baseService
    .get(`/tags/${slug}`)
    .then((res) => [null, res.data])
    .catch((err) => [err, null]);
};
