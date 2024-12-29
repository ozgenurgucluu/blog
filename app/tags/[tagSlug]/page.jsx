import PostList from "@/components/PostList";
import { fetchAllPostsService } from "@/services/postService";
import { fetchAllTagService, fetchTagBySlug } from "@/services/tagService";
import React from "react";

const TagPage = async ({ params }) => {
  const { tagSlug } = await params;
  const [reqErr, tag] = await fetchTagBySlug(tagSlug);

  if (reqErr || !tag) {
    return (
      <div className="container py-12">
        <h1 className="text-5xl font-medium mx-auto">Category not found</h1>
      </div>
    );
  }

  const [reqErrPosts, posts] = await fetchAllPostsService({ tag: tagSlug });

  const filteredTag = posts.filter((post) =>
    post.tags.map((i) => i.slug).includes(tagSlug)
  );
  return (
    <>
      <PostList posts={filteredTag} />
    </>
  );
};

export default TagPage;
