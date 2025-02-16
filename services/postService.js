import baseService from './baseService';

export const fetchAllPostsService = (filter = {}) => {
  return baseService
    .get('/posts', { params: filter })
    .then((res) => [null, res.data])
    .catch((error) => [error, null]);
};

export const fetchPostBySlug = (slug) => {
  return baseService
    .get(`/posts/${slug}`)
    .then((res) => [null, res.data])
    .catch((err) => [err, null]);
};

export const updatePost = (id, data) => {
  const token = localStorage.getItem('token');

  return baseService
    .put(`/posts/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => [null, res.data])
    .catch((err) => [err, null]);
};
export const createPost = (data) => {
  const token = localStorage.getItem('token');

  return baseService
    .post('/posts', data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => [null, res.data])
    .catch((err) => [err, null]);
};
export const deletePost = (id) => {
  const token = localStorage.getItem('token');
  return baseService
    .delete(`/post/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => [null, res.data])
    .catch((error) => [error, null]);
};
