'use client';
import React, { useState } from 'react';
import { createTag, deleteTag } from '@/services/tagService';
import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const AdminTag = ({ tags }) => {
  console.log(tags);
  const [localTags, setLocalTags] = useState(tags);
  const [inputValue, setInputValue] = useState({
    title: '',
    bgColor: '#ffffff',
    textColor: '#000000',
  });

  const addTag = async () => {
    if (inputValue === ' ') {
      return alert('Boş bırakılamaz');
    }
    const [reqErr, data] = await createTag(inputValue);

    alert('Kategori başarıyla eklendi.');
    setLocalTags([...localTags, data]);
    setInputValue({ title: 'd', bgColor: '#000', textColor: '#FFF' });
  };

  const deleteItem = async (id) => {
    const [reqErr] = await deleteTag(id);
    if (reqErr) {
      alert('Kategori silinemedi. Lütfen tekrar deneyin.');
      return;
    }
    alert('Kategori başarıyla silindi.');
    setLocalTags(localTags.filter((tag) => tag.id !== id));
  };

  return (
    <div className="flex flex-col gap-8 p-6 bg-slate-50 rounded-md shadow-lg ">
      <div className="flex flex-col gap-2">
        <div className="flex gap-3 items-center">
          <label className="text-gray-700 font-medium">Tag Adı Girin:</label>
          <input
            type="text"
            placeholder="Tag Adı"
            value={inputValue.title}
            className="border p-3 rounded-md text-sm text-gray-900 outline-blue-300 focus:ring-2 focus:ring-blue-400 transition-all"
            onChange={(e) =>
              setInputValue({ ...inputValue, title: e.target.value })
            }
          />
        </div>

        <div className="flex gap-3 items-center">
          <label className="text-gray-700 font-medium">
            Arka Plan Rengi Seçin:
          </label>
          <input
            type="color"
            value={inputValue.bgColor}
            className="w-12 h-12 p-1 border-2 rounded-md cursor-pointer border-gray-300 bg-gray-100"
            onChange={(e) =>
              setInputValue({ ...inputValue, bgColor: e.target.value })
            }
          />
        </div>

        <div className="flex gap-3 items-center">
          <label className="text-gray-700 font-medium">
            Metin Rengi Seçin:
          </label>
          <input
            type="color"
            value={inputValue.textColor}
            className="w-12 h-12 p-1 border-2 rounded-md cursor-pointer border-gray-300 bg-gray-100"
            onChange={(e) =>
              setInputValue({ ...inputValue, textColor: e.target.value })
            }
          />
        </div>
        <div className="flex gap-2 mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-md w-32 p-2 py-2.5 font-semibold transition duration-300"
            onClick={addTag}
          >
            Ekle
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-6 ">
        {localTags.map((tag) => (
          <div
            className="border flex   items-center justify-between rounded-md p-1 font-semibold w-full  "
            key={tag.id}
            style={{
              backgroundColor: tag.bgColor,
              color: tag.textColor,
            }}
          >
            <span className="flex mx-5 cursor-pointer font-semibold text-lg">
              {tag.title}
            </span>
            <div className="flex gap-4 items-center">
              <Link
                className="flex gap-2 items-center justify-center border text-white border-blue-200 rounded-md p-3 hover:bg-gray-400 transition-all duration-300 ease-in-out shadow-md transform hover:scale-105"
                href={`/admin-panel/tags/${tag.slug}/edit`}
              >
                <FaEdit className=" w-5 h-4 rounded-full flex items-center justify-center transition-all" />
                <span> Düzenle</span>
              </Link>
              <button
                className="flex items-center justify-center border border-gray-100 rounded-md p-2  hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out shadow-md transform hover:scale-105"
                onClick={() => deleteItem(tag.id)}
              >
                <span className="text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-700 transition-all">
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

export default AdminTag;
