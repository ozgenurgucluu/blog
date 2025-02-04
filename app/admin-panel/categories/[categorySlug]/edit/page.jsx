import { fetchCategoryBySlug } from "@/services/categoryService";
import React from "react";
import AdminCategoryEdit from "@/components/AdminCategoryEdit";

const CategoryEditPage = async ({ params }) => {
  const { categorySlug } = await params;
  const [reqErr, category] = await fetchCategoryBySlug(categorySlug);

  return <AdminCategoryEdit category={category} />;
};

export default CategoryEditPage;
