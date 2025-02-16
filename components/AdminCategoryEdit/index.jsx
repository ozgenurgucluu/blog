'use client';
import { updateCategory } from '@/services/categoryService';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const AdminCategoryEdit = ({ category }) => {
  const [selectedCategory, setSelectedCategory] = useState(category);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [reqError, newCategory] = await updateCategory(
      selectedCategory.id,
      selectedCategory
    );

    if (reqError) {
      alert('Bir hata oluştu');
    } else {
      alert('Kategori başarıyla güncellendi');
      router.push('/admin-panel/categories');
    }
  };

  return (
    <div className="p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-start w-full"
      >
        <div className="flex flex-col w-full">
          <label htmlFor="name" className="mb-1 font-medium">
            Kategori Adı:
          </label>
          <input
            type="text"
            value={selectedCategory.title}
            onChange={(e) =>
              setSelectedCategory({
                ...selectedCategory,
                title: e.target.value,
              })
            }
            className="border border-blue-300 outline-none p-2 w-full rounded"
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="id" className="mb-1 font-medium">
            Kategori Id:
          </label>
          <input
            type="text"
            value={selectedCategory.id}
            readOnly
            className="border border-gray-300 outline-none p-2 w-full rounded bg-gray-100"
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="slug" className="mb-1 font-medium">
            Kategori Slug:
          </label>
          <input
            type="text"
            value={selectedCategory.slug}
            onChange={(e) =>
              setSelectedCategory({ ...selectedCategory, slug: e.target.value })
            }
            className="border border-blue-300 outline-none p-2 w-64 rounded"
          />
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Kaydet
          </button>
          <Link
            href="/admin-panel/categories"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Geri Dön
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AdminCategoryEdit;
