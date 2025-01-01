import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchAllCategoriesService } from "@/services/categoryService";

export default async function RootLayout({ children }) {
  const [reqError, reqData] = await fetchAllCategoriesService();

  return (
    <html lang="en">
      <body>
        <Header categories={!reqError ? reqData : []} />
        <main className="flex-1 my-10"> {children} </main>
        <Footer />
      </body>
    </html>
  );
}
