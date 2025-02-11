import React from "react";
import { fetchTagBySlug } from "@/services/tagService";
import AdminTagEdit from "@/components/AdminTagEdit";

const CategoryEditPage = async ({ params }) => {
  const { tagSlug } = await params;
  const [reqErr, tag] = await fetchTagBySlug(tagSlug);

  return <AdminTagEdit tag={tag} />;
};

export default CategoryEditPage;
