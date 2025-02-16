import AdminCreatePost from '@/components/AdminCreatePost';
import React from 'react';
import { fetchAllCategoriesService } from '@/services/categoryService';
import { fetchAllTagService } from '@/services/tagService';

const CreatePage = async () => {
  const [err, tags] = await fetchAllTagService();
  const [Err, categories] = await fetchAllCategoriesService();
  return <AdminCreatePost tags={tags} categories={categories} />;
};

export default CreatePage;
