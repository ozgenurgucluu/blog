'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PostDetail = ({ post, posts }) => {
  const filteredPosts = posts.filter((i) => i.slug !== post.slug);
  console.log('filterllee', filteredPosts);
  return (
    <div className="container mx-auto my-10 flex gap-14  ">
      <div className="flex flex-col gap-5 w-[955px] ">
        <h1 className="text-2xl font-semibold ">{post.title}</h1>
        <Image
          loader={({ src }) => src}
          src={post.thumbnail}
          alt="image"
          width={955}
          height={255}
          className="shadow-xl"
        />
        <p>{post.summary}</p>
        <p>{post.content}</p>

        <div className="flex gap-2">
          {' '}
          {post.tags.map((tag, index) => (
            <Link
              href={`/tags/${tag.slug}`}
              key={index}
              style={{ backgroundColor: tag.bgColor, color: tag.textColor }}
              className="p-1"
            >
              #{tag.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="p-3 font-semibold text-black text-lg">
          İlgini Çekebilecek Haberler
        </h1>
        {filteredPosts.map((post, index) => (
          <Link
            className="w-[310px] flex flex-col gap-2 shadow-lg p-3 rounded-lg hover:bg-slate-200"
            href={`/${post.categories[0].slug}/${post.slug}`}
            key={index}
          >
            <span className="text-sm font-semibold text-black/85">
              {post.title}
            </span>
            <Image
              loader={({ src }) => src}
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
