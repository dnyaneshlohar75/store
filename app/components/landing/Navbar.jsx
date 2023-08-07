import React from "react";
import Link from "next/link";
import { Gem, Menu, Plug, Shirt } from "lucide-react";

const Navbar = () => {
  return (
    <div className="py-3 hidden sm:flex items-center space-x-5 text-sm md:text-md lg:text-lg">
      <Link href="/" className="flex items-center space-x-2 dark:text-gray-50 text-gray-600 hover:text-gray-950">
        <Menu />
        <span>All Products</span>
      </Link>
      <Link href="/electronics" className="flex items-center space-x-2 dark:text-gray-50 text-gray-600 hover:text-gray-950">
        <Plug />
        <span>Electronics</span>
      </Link>
      <Link href="/fashion" className="flex items-center space-x-2 dark:text-gray-50 text-gray-600 hover:text-gray-950">
        <Shirt />
        <span>Fashion</span>
      </Link>
      <Link href="/jewelery" className="flex items-center space-x-2 dark:text-gray-50 text-gray-600 hover:text-gray-950">
        <Gem />
        <span>Jewelery</span>
      </Link>
    </div>
  );
};

export default Navbar;
