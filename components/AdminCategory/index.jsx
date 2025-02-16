'use client';
import React, { useState } from 'react';
import { createCategory, deleteCategory } from '@/services/categoryService';
import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const AdminCategory = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState({ title: '' });
  const [localCategories, setLocalCategories] = useState(categories);

  const handleSubmit = async () => {
    if (!selectedCategory.title.trim()) {
      return alert('Kategori adı boş olamaz!');
    }

    const duplicate = localCategories.some(
      (category) => category.title === selectedCategory.title
    );
    if (duplicate) {
      return alert('Bu kategori zaten mevcut');
    }

    const [reqError, newCategory] = await createCategory(selectedCategory);
    if (reqError) {
      return alert('Kategori eklenemedi');
    }

    alert('Kategori başarıyla eklendi!');
    setLocalCategories([...localCategories, newCategory]);
    setSelectedCategory({ title: '' });
  };

  const deleteItem = async (id) => {
    if (!id) {
      return alert('Silinecek kategori seçilmedi!');
    }

    const [reqErr] = await deleteCategory(id);
    if (reqErr) {
      return alert('Kategori silinemedi');
    }

    alert('Kategori başarıyla silindi!');
    setLocalCategories(
      localCategories.filter((category) => category.id !== id)
    );
    setSelectedCategory({ title: '' });
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <label htmlFor="text">Kategori Adı</label>
        <input
          type="text"
          placeholder="Kategori Adı"
          className="border p-4 rounded-md bg-gray-100 outline-blue-300 w-1/4 text-gray-900"
          value={selectedCategory.title}
          onChange={(e) =>
            setSelectedCategory({ ...selectedCategory, title: e.target.value })
          }
        />
        <button
          className="border rounded-md bg-blue-100 w-32 p-4 hover:bg-blue-300 font-semibold"
          onClick={handleSubmit}
        >
          Ekle
        </button>
      </div>

      <div className="flex flex-wrap gap-3">
        {localCategories.map((category) => (
          <div
            className="border flex gap-3 justify-between items-center rounded-md bg-gray-100 font-semibold text-gray-700 w-full"
            key={category.id}
          >
            <span
              className="mx-5 cursor-pointer"
              onClick={() => setSelectedCategory(category)}
            >
              {category.title}
            </span>

            <div className="flex gap-4 items-center">
              <Link
                className="flex gap-2 items-center justify-center border bg-blue-300 border-blue-200 rounded-md p-3 hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out shadow-md transform hover:scale-105"
                href={`/admin-panel/categories/${category.slug}/edit`}
              >
                <FaEdit className="text-white   w-5 h-4 rounded-full flex items-center justify-center transition-all" />
                <span> Düzenle</span>
              </Link>
              <button
                className="flex items-center justify-center border border-red-200 bg-red-300 rounded-md p-3 hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out shadow-md transform hover:scale-105"
                onClick={() => deleteItem(category.id)}
              >
                <span className="text-white  w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-700 transition-all">
                  <MdDelete className="text-white text-lg w-5 h-6" />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCategory;
