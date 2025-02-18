import AdminTag from '@/components/AdminTag';
import { fetchAllTagService } from '@/services/tagService';
import React from 'react';

const TagPage = async () => {
  const [reqErr, tags] = await fetchAllTagService();
  return (
    <div>
      <AdminTag tags={tags} />
    </div>
  );
};

export default TagPage;
