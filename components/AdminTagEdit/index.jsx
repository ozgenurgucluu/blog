'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { updateTag } from '@/services/tagService';

const AdminTagEdit = ({ tag }) => {
  const [selectedTag, setSelectedTag] = useState(tag);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [reqError, newTag] = await updateTag(selectedTag.id, selectedTag);

    if (reqError) {
      alert('Bir hata oluştu');
    } else {
      alert('Tag başarıyla güncellendi');
      router.push('/admin-panel/tags');
    }
  };

  return (
    <div className="p-4 s bg-slate-50 rounded-md shadow-lg">
      <form className="flex flex-col gap-4 items-start ">
        <div className="flex flex-col gap-2">
          <div className="flex gap-3 items-center">
            <label className="text-gray-700 font-medium">Tag Adı Girin:</label>
            <input
              type="text"
              placeholder="Tag Adı"
              value={selectedTag.title}
              className="border p-3 rounded-md  text-sm text-gray-900 outline-blue-300 focus:ring-2 focus:ring-blue-400 transition-all"
              onChange={(e) =>
                setSelectedTag({ ...selectedTag, title: e.target.value })
              }
            />
          </div>

          <div className="flex gap-3 items-center">
            <label className="text-gray-700 font-medium">
              Arka Plan Rengi Seçin:
            </label>
            <input
              type="color"
              className="w-12 h-12 p-1 border-2 rounded-md cursor-pointer border-gray-300 bg-gray-100"
              value={selectedTag.bgColor}
              onChange={(e) =>
                setSelectedTag({ ...selectedTag, bgColor: e.target.value })
              }
            />
          </div>

          <div className="flex gap-3 items-center">
            <label className="text-gray-700 font-medium">
              Metin Rengi Seçin:
            </label>
            <input
              type="color"
              className="w-12 h-12 p-1 border-2 rounded-md cursor-pointer border-gray-300 bg-gray-100"
              value={selectedTag.textColor}
              onChange={(e) =>
                setSelectedTag({ ...selectedTag, textColor: e.target.value })
              }
            />
          </div>
          <div className="flex gap-3 mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-md w-32 p-2 py-2.5 font-semibold transition duration-300"
              onClick={handleSubmit}
            >
              Ekle
            </button>
            <Link
              href="/admin-panel/tags"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-md w-32 p-2 py-2.5 font-semibold transition duration-300 justify-center flex"
            >
              Geri Dön
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminTagEdit;
