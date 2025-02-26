import PostList from "@/components/PostList";
import { fetchCategoryBySlug } from "@/services/categoryService";
import { fetchAllPostsService } from "@/services/postService";
import React from "react";

const CategoryPage = async ({ params }) => {
  const categorySlug = params.categorySlug;
  const [reqErr, category] = await fetchCategoryBySlug(categorySlug);

  const [reqErrPosts, posts] = await fetchAllPostsService({
    category: categorySlug,
  });

  const filteredPosts = posts.filter((post) =>
    post.categories.map((i) => i.slug).includes(categorySlug)
  );

  return (
    <div>
      {filteredPosts.length === 0 ? (
        <div className="container mx-auto text-center mt-10 text-base">
          <span className="italic  font-semibold">{category.title}</span>
          Kategorisine Ait Ürün Bulunamadı
        </div>
      ) : (
        <PostList posts={filteredPosts} />
      )}
    </div>
  );
};

export default CategoryPage;
