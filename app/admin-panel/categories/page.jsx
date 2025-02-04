import AdminCategory from "@/components/AdminCategory";
import { fetchAllCategoriesService } from "@/services/categoryService";
import React from "react";

const CategoryPage = async () => {
  const [reqErr, categories] = await fetchAllCategoriesService();
  return (
    <div>
      <AdminCategory categories={categories} />
    </div>
  );
};

export default CategoryPage;
