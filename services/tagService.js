import baseService from './baseService.js';

export const fetchAllTagService = () => {
  return baseService
    .get('/tags')
    .then((res) => [null, res.data])
    .catch((err) => [err, null]);
};

export const fetchTagBySlug = (slug) => {
  return baseService
    .get(`/tags/${slug}`)
    .then((res) => [null, res.data])
    .catch((err) => [err, null]);
};

export const createTag = (data) => {
  const token = localStorage.getItem('token');

  return baseService
    .post('/tags', data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => [null, res.data])
    .catch((err) => [err, null]);
};

export const updateTag = (id, data) => {
  const token = localStorage.getItem('token');

  return baseService
    .put(`/tags/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => [null, res.data])
    .catch((err) => [err, null]);
};

export const deleteTag = (id) => {
  const token = localStorage.getItem('token');
  return baseService
    .delete(`/tags/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => [null, res.data])
    .catch((error) => [error, null]);
};
