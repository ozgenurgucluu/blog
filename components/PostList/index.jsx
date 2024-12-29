import Link from "next/link";
import Image from "next/image";

const PostList = ({ posts }) => {
  return (
    <div className="grid grid-cols-4 gap-4 container mx-auto sm:p-3 sm:px-6 my-5 ">
      {posts.map((post, index) => (
        <div
          key={index}
          className="border border-black/15 flex flex-col sm:gap-2 transition-transform duration-500 ease-in-out hover:scale-90 rounded-md px-2"
        >
          <Link href={`/${post.categories[0].slug}/${post.slug}`}>
            <Image
              src={post?.thumbnail}
              alt="image"
              width={300}
              height={300}
              className="w-auto h-[260px] rounded-md"
            />
            <h1 className=" font-semibold text-black p-3">{post.title}</h1>
          </Link>
          <span className="border-black/20 border-b-2 w-full"></span>
          <p className=" text-black/65 line-clamp-3 mx-3">{post.summary}</p>
          <div className="box-border flex flex-wrap gap-2 p-2">
            {post.tags &&
              post.tags.map((tag, tagIndex) => (
                <Link
                  href={`/tags/${tag.slug}`}
                  key={tagIndex}
                  className="rounded-full bg-black text-white px-3 py-2"
                  style={{ backgroundColor: tag.bgColor, color: tag.textColor }}
                >
                  {tag.title}
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
