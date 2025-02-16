'use client';
import React, { useState } from 'react';
import { updatePost } from '@/services/postService';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import classNames from 'classnames';

const AdminPostEdit = ({ editPost, categories, tags }) => {
  const [selectedPost, setSelectedPost] = useState(editPost);
  const [newTag, setNewTag] = useState('');
  const router = useRouter('');

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(selectedPost);
    const [reqError, newPost] = await updatePost(selectedPost.id, selectedPost);
    if (reqError) {
      alert('Bir hata oluştu');
    } else {
      alert('Post başarıyla güncellendi');
      router.push('/admin-panel/posts');
    }
  };

  const handleClickTag = (tag) => {
    const index = selectedPost.tags.indexOf(tag.id);
    if (index === -1) {
      setSelectedPost({
        ...selectedPost,
        tags: [...selectedPost.tags, tag.id],
      });
    } else {
      setSelectedPost({
        ...selectedPost,
        tags: selectedPost.tags.filter((item) => item !== tag.id),
      });
    }
  };

  const handleClickCategory = (category) => {
    const index = selectedPost.categories.indexOf(category.id);
    if (index === -1) {
      setSelectedPost({
        ...selectedPost,
        categories: [...selectedPost.categories, category.id],
      });
    } else {
      setSelectedPost({
        ...selectedPost,
        categories: selectedPost.categories.filter(
          (item) => item !== category.id
        ),
      });
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl text-black">İçeriği Düzenle</h1>
      <div className="flex flex-col w-full gap-1">
        <label className="mb-1 font-medium bg-gray-100 p-2 w-[870px] rounded">
          İçerik Başlığı:
        </label>
        <textarea
          value={selectedPost.title}
          onChange={(e) =>
            setSelectedPost({ ...selectedPost, title: e.target.value })
          }
          className="border-slate-300 bg-slate-50  focus:bg-white focus:border-slate-600 border-2 outline-none p-2 w-[870px] rounded overflow-hidden resize-none"
        />
      </div>
      <div className="flex flex-col w-full gap-1">
        <label
          htmlFor="summary"
          className="mb-1 font-medium bg-gray-100 p-2 w-[870px] rounded"
        >
          İçerik Özeti:
        </label>
        <textarea
          value={selectedPost.summary}
          onChange={(e) =>
            setSelectedPost({ ...selectedPost, summary: e.target.value })
          }
          className="border-slate-300 bg-slate-50  focus:bg-white focus:border-slate-600 border-2 outline-none p-2 w-[870px] rounded"
        />
      </div>
      <div className="flex flex-col w-full gap-1">
        <label className="mb-1 font-medium bg-gray-100 p-2 w-[870px] rounded">
          İçerik
        </label>
        <textarea
          value={selectedPost.content}
          onChange={(e) =>
            setSelectedPost({ ...selectedPost, content: e.target.value })
          }
          className="border-slate-300 bg-slate-50 focus:bg-white focus:border-slate-600 border-2 outline-none p-2 w-[870px] min-h-[300px] rounded resize-none"
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
                  'opacity-30 text-black': !selectedPost.categories.includes(
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
                  'opacity-20': !selectedPost.tags.includes(tag.id),
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
        <label
          htmlFor="thumbnail"
          className="mb-1 font-medium bg-gray-100 p-2 w-[870px] rounded"
        >
          Görsel (Thumbnail):
        </label>
        <textarea
          value={selectedPost.thumbnail}
          onChange={(e) =>
            setSelectedPost({ ...selectedPost, thumbnail: e.target.value })
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

export default AdminPostEdit;
