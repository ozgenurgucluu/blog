import React from 'react';

const AdminLayout = ({ categories, tags, posts }) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="w-full bg-blue-100 p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-xl font-semibold text-blue-700">Kategoriler</h3>
        <p className="text-2xl text-blue-900">{categories.length}</p>
      </div>
      <div className="w-full bg-green-100 p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-xl font-semibold text-green-700">Etiketler</h3>
        <p className="text-2xl text-green-900">{tags.length}</p>
      </div>
      <div className="w-full bg-yellow-100 p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-xl font-semibold text-yellow-700">Gönderiler</h3>
        <p className="text-2xl text-yellow-900">{posts.length}</p>
      </div>
    </div>
  );
};

export default AdminLayout;
