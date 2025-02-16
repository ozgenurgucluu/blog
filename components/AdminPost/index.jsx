'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineDelete } from 'react-icons/ai';

const AdminPost = ({ posts }) => {
  const deletePost = async (id) => {
    const [reqError, deleteData] = await deletePost(id);
  };

  return (
    <div className="container mx-auto my-5 flex flex-col gap-3">
      <div className="flex justify-between items-center p-2">
        <h1 className="text-xl font-semibold">İçerikler</h1>
        <Link
          className=" hover:font-semibold hover:text-gray-700 border border-gray-300 p-2 rounded-md w-[200px] text-center hover:bg-blue-200"
          href={`/admin-panel/posts/create`}
        >
          Yeni İçerik Oluştur
        </Link>
      </div>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 border-b ">
            <th className="px-4 py-2 text-left">Title</th>
            <th className="px-4 py-2 text-left">Slug</th>
            <th className="px-4 py-2 text-left">Content</th>
            <th className="px-4 py-2 text-left">Tags</th>
            <th className="px-4 py-2 text-left">Thumbnail</th>
            <th className="px-4 py-2 text-left">Delete</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={index} className="border-b hover:bg-slate-100">
              <td className="px-4 py-2">
                <Link
                  href={`/admin-panel/posts/${post.slug}/edit`}
                  className="text-blue-600"
                >
                  {post.title}
                </Link>
              </td>
              <td className="px-4 py-2">{post.summary}</td>
              <td className="px-4 py-2 text-black/65">{post.content}</td>
              <td className="px-4 py-2">
                <div className="flex gap-2 flex-wrap ">
                  {post.tags &&
                    post.tags.map((tag, index) => (
                      <div
                        key={index}
                        className="rounded-full bg-black text-white px-3 py-2 "
                        style={{
                          backgroundColor: tag.bgColor,
                          color: tag.textColor,
                        }}
                      >
                        {tag.title}
                      </div>
                    ))}
                </div>
              </td>
              <td className="px-4 py-2">
                <Image
                  src={post?.thumbnail}
                  loader={({ src }) => src}
                  alt="image"
                  width={80}
                  height={80}
                  className="w-auto h-[80px] rounded-md"
                />
              </td>
              <td>
                <button
                  className="flex items-center justify-center border border-red-200 bg-red-300 rounded-md p-3 hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out shadow-md transform hover:scale-105"
                  onClick={() => deletePost(post.id)}
                >
                  <AiOutlineDelete className="w-8 h-8" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPost;
