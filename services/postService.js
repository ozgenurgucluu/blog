import baseService from "./baseService";

export const fetchAllPostsService = (filter = {}) => {
  return baseService
    .get("/posts", { params: filter })
    .then((res) => [null, res.data])
    .catch((error) => [error, null]);
};

export const fetchPostBySlug = (slug) => {
  return baseService
    .get(`/posts/${slug}`)
    .then((res) => [null, res.data])
    .catch((err) => [err, null]);
};
