import Link from "next/link";
import Image from "next/image";

const PostList = ({ posts }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {posts.map((post, index) => (
        <div
          key={index}
          className="border border-black/15 flex flex-col sm:gap-2 transition-transform duration-500 ease-in-out hover:scale-90 rounded-md"
        >
          <Link href={"/"}>
            <Image
              src={post?.thumbnail}
              alt="image"
              width={300}
              height={300}
              className="w-auto h-[260px] sm:px-3 p-2 rounded-md"
            />
            <h1 className="sm:px-3 p-2 font-semibold text-black">
              {post.title}
            </h1>
          </Link>
          <span className="border-black/20 border-b-2 w-full"></span>
          <p className="sm:px-3 p-2 text-black/65 line-clamp-2">
            {post.summary}
          </p>
          <div className="sm:px-3 p-2 flex flex-wrap gap-2">
            {post.tags &&
              post.tags.map((tag, tagIndex) => (
                <div
                  key={tagIndex}
                  className="rounded-2xl bg-black text-white px-3 py-1"
                  style={{ backgroundColor: tag.bgColor, color: tag.textColor }}
                >
                  {tag.title}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
