import { fetchAllCategoriesService } from '@/services/categoryService';
import { fetchAllPostsService } from '@/services/postService';
import { useAuthStore } from '@/stores/authStore';
import { fetchAllTagService } from '@/services/tagService';
import AdminLayout from '@/components/AdminLayout';

const AdminPanel = async () => {
  const [postErr, posts] = await fetchAllPostsService();
  const [categoryErr, categories] = await fetchAllCategoriesService();
  const [tagErr, tags] = await fetchAllTagService();
  return <AdminLayout {...{ categories, tags, posts }} />;
};

export default AdminPanel;
