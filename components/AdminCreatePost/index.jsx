'use client';
import React, { useState } from 'react';
import { createPost } from '@/services/postService';
import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';

const AdminCreatePost = ({ categories, tags }) => {
  const router = useRouter();
  const [newPost, setNewPost] = useState({
    title: '',
    summary: '',
    tags: [],
    categories: [],
    thumbnail: '',
  });
  const handleSave = async (e) => {
    e.preventDefault();
    console.log(newPost);
    const [reqError, newData] = await createPost(newPost);
    if (reqError) {
      alert('Bir hata oluştu');
    } else {
      alert('Post başarıyla eklendi');
      router.push('/admin-panel/posts');
    }
    console.log('new datamızz', newData);
  };

  const handleClickTag = (tag) => {
    const index = newPost.tags.indexOf(tag.id);
    if (index === -1) {
      setNewPost({
        ...newPost,
        tags: [...newPost.tags, tag.id],
      });
    } else {
      setNewPost({
        ...newPost,
        tags: newPost.tags.filter((item) => item !== tag.id),
      });
    }
  };
  const handleClickCategory = (category) => {
    const index = newPost.categories.indexOf(category.id);
    if (index === -1) {
      setNewPost({
        ...newPost,
        categories: [...newPost.categories, category.id],
      });
    } else {
      setNewPost({
        ...newPost,
        categories: newPost.categories.filter((item) => item !== category.id),
      });
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl text-black">Yeni İçerik Oluştur</h1>
      <div className="flex flex-col w-full gap-1">
        <label className="mb-1 font-medium bg-gray-100 p-2 w-[870px] rounded">
          İçerik Başlığı:
        </label>
        <textarea
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          className="border-slate-300 bg-slate-50  focus:bg-white focus:border-slate-600 border-2 outline-none p-2 w-[870px] rounded overflow-hidden resize-none"
        />
      </div>
      <div className="flex flex-col w-full gap-1">
        <label className="mb-1 font-medium bg-gray-100 p-2 w-[870px] rounded">
          İçerik Özeti:
        </label>
        <textarea
          value={newPost.summary}
          onChange={(e) => setNewPost({ ...newPost, summary: e.target.value })}
          className="border-slate-300 bg-slate-50  focus:bg-white focus:border-slate-600 border-2 outline-none p-2 w-[870px] rounded overflow-hidden resize-none"
        />
      </div>

      <div className="flex flex-col w-full gap-1">
        <label
          htmlFor="summary"
          className="mb-1 font-medium bg-gray-100 p-2 w-[870px] rounded"
        >
          İçerik:
        </label>
        <textarea
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          className="border-slate-300 bg-slate-50  focus:bg-white focus:border-slate-600 border-2 outline-none p-2 w-[870px] rounded"
        />
      </div>
      <div className="flex flex-col w-full gap-1">
        <label
          htmlFor="tags"
          className="mb-1 font-medium bg-gray-100 p-2 w-[870px] rounded"
        >
          Kategoriler:
        </label>
        <div className="gap-2 grid grid-cols-3 w-[870px]">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleClickCategory(category)}
              className={classNames(
                'border-slate-300 mt-1 p-3  bg-slate-400 border-2 font-semibold outline-none justify-center  min-w-36 rounded',
                {
                  'opacity-30 text-black': !newPost.categories.includes(
                    category.id
                  ),
                }
              )}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full gap-1">
        <label
          htmlFor="tags"
          className="mb-1 font-medium bg-gray-100 p-2 w-[870px] rounded"
        >
          Etiketler:
        </label>
        <div className="gap-2 grid grid-cols-3 w-[870px]">
          {tags.map((tag, index) => (
            <button
              key={index}
              style={{ backgroundColor: tag.bgColor, color: tag.textColor }}
              className={classNames(
                'border-slate-300 mt-1 bg-slate-50  focus:border-slate-600 border-2 font-semibold outline-none justify-center p-3 min-w-36 rounded',
                {
                  'opacity-20': !newPost.tags.includes(tag.id),
                }
              )}
              onClick={() => handleClickTag(tag)}
            >
              {tag.title}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full gap-1">
        <label className="mb-1 font-medium bg-gray-100 p-2 w-[870px] rounded">
          Görsel (Thumbnail):
        </label>
        <textarea
          value={newPost.thumbnail}
          onChange={(e) =>
            setNewPost({ ...newPost, thumbnail: e.target.value })
          }
          className="border-slate-300 bg-slate-50  focus:bg-white focus:border-slate-600 border-2 outline-none p-2 w-[870px] rounded"
        />
      </div>
      <div className="flex w-[870px] gap-3">
        <button
          onClick={handleSave}
          className="mb-1 font-medium bg-blue-400 hover:bg-blue-500 px-3 py-2 text-lg w-[180px] rounded text-white "
        >
          Kaydet
        </button>
        <Link
          href="/admin-panel/posts"
          className="mb-1 font-medium bg-blue-400 hover:bg-blue-500 px-3 py-2 text-lg w-[180px] rounded text-white "
        >
          Geri Dön
        </Link>
      </div>
    </div>
  );
};

export default AdminCreatePost;
