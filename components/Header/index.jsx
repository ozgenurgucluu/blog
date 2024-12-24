import React from "react";
import Link from "next/link";

const Header = ({ categories }) => {
  return (
    <header className="flex items-center justify-center bg-black/85 h-20">
      <div className="flex justify-center gap-6 ">
        {categories.map((category, index) => (
          <Link
            key={index}
            href={"/"}
            className="hover:text-gray-100 font-semibold tracking-wide  text-gray-400"
          >
            {category.title.toUpperCase("tr")}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
