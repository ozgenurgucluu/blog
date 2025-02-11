import AdminTag from "@/components/AdminTag";
import { fetchAllTagService } from "@/services/tagService";
import React from "react";

const TagPage = async () => {
  const [reqErr, tags] = await fetchAllTagService();
  console.log("5s55s5d5d",tags);
  return (
    <div>
      <AdminTag tags={tags} />
    </div>
  );
};

export default TagPage;
