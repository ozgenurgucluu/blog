import React from "react";
import Image from "next/image";
import Link from "next/link";

const PostDetail = ({ post, posts }) => {
  const filteredPosts = posts.filter((i) => i.slug !== post.slug);
  console.log("filterllee", filteredPosts);
  return (
    <div className="container mx-auto my-10 flex gap-14  ">
      <div className="flex flex-col gap-5 w-[955px] ">
        <h1 className="text-2xl font-semibold ">{post.title}</h1>
        <Image
          src={post.thumbnail}
          alt="image"
          width={955}
          height={255}
          className="shadow-xl"
        />
        <p>{post.summary}</p>
      </div>
      <div className="flex flex-col gap-3">
        {filteredPosts.map((post, index) => (
          <Link
            className="w-[310px] flex flex-col gap-1 shadow-lg p-3 rounded-md"
            href={`/${post.categories[0].slug}/${post.slug}`}
            key={index}
          >
            <span className="text-sm">{post.title}</span>
            <Image
              src={post.thumbnail}
              width={310}
              height={315}
              alt="image"
              className="max-h-[295px]"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostDetail;
