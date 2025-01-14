import { fetchAllPostsService, fetchPostBySlug } from "@/services/postService";
import React from "react";
import PostDetail from "@/components/PostDetail";

const PostDetailPage = async ({ params }) => {
  const { postSlug } = await params;
  const [reqErr, post] = await fetchPostBySlug(postSlug);
  const [reqErrPost, posts] = await fetchAllPostsService();

  return (
    <div>
      <PostDetail post={post} posts={posts} />
    </div>
  );
};

export default PostDetailPage;
