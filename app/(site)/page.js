import PostList from "@/components/PostList";
import { fetchAllPostsService } from "@/services/postService";

export default async function Home() {
  const [reqError, posts] = await fetchAllPostsService();
  return (
    <div className="container mx-auto  flex flex-col gap-5 sp-3 px-6">
      <h1 className="text-2xl">Gündemdekiler</h1>
      <PostList posts={!reqError ? posts : []} />
    </div>
  );
}
