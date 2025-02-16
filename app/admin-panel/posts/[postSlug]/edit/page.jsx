import React from 'react';
import AdminPostEdit from '@/components/AdminPostEdit';
import { fetchPostBySlug } from '@/services/postService';
import { fetchAllCategoriesService } from '@/services/categoryService';
import { fetchAllTagService } from '@/services/tagService';

const PostEditPage = async ({ params }) => {
  const { postSlug } = await params;
  const [reqErr, editPost] = await fetchPostBySlug(postSlug);
  const [err, categories] = await fetchAllCategoriesService();
  const [Err, tags] = await fetchAllTagService();
  console.log('categoridddes', categories);
  const postData = {
    ...editPost,
    categories: editPost.categories.map((category) => category.id),
    tags: editPost.tags.map((tag) => tag.id),
  };
  return (
    <AdminPostEdit editPost={postData} categories={categories} tags={tags} />
  );
};

export default PostEditPage;
