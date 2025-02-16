import React from 'react';
import { fetchAllPostsService } from '@/services/postService';
import AdminPost from '@/components/AdminPost';

const PostsPage = async () => {
  const [reqErr, posts] = await fetchAllPostsService();
  return <AdminPost posts={posts} />;
};

export default PostsPage;
