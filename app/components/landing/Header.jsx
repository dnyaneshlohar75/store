"use client";
import { Heart, LogOut, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";
import ThemeButton from "../ThemeButton";
import { useSelector } from "react-redux";
import { selectItems } from "@/redux/basketSlice";
import { signIn, signOut, useSession } from "next-auth/react";
const Header = () => {
  const session = useSession();
  const item = useSelector(selectItems);
  return (
    <header className="dark:bg-slate-950 px-5 py-3 w-full">
      <div className="flex items-center justify-between py-3">
        {/* Logo */}
        <div>
          <h1 className="font-bold uppercase tracking-widest text-2xl">
            store
          </h1>
        </div>
        <div className="flex items-center gap-5">
          <Link href="/products/wishlist">
            <Heart size={20} />
          </Link>
          <Link
            href="/products/checkout"
            className="relative cursor-pointer text-gray-950 dark:text-gray-50"
          >
            <span className="absolute -top-2 -right-2 text-xs bg-gray-700 py-[2px] px-[6px] text-white rounded-full">
              {item.length}
            </span>
            <ShoppingCart size={20} />
          </Link>
          <ThemeButton />
          {session?.status === "authenticated" ? (
            <div className="">
              <button className="group relative text-left">
                <div className="cursor-pointer w-8 h-8 overflow-hidden rounded-full">
                  <img
                    className="w-full h-full object-cover"
                    src={session?.data?.user?.image}
                    alt=""
                  />
                </div>
                <div>
                  <div className = "hidden group-focus:block absolute w-72 top-10 right-0 bg-white border rounded-sm">
                    <div className="flex gap-3 p-3">
                      <div className="w-10 h-10 overflow-hidden rounded-full">
                        <img
                          className="w-full h-full object-cover"
                          src={session?.data?.user?.image}
                          alt=""
                        />
                      </div>
                      <div>
                        <h1 className="text-sm font-semibold">
                          {session?.data?.user?.name}
                        </h1>
                        <p className="text-sm text-gray-400">
                          {session?.data?.user?.email}
                        </p>
                      </div>
                    </div>
                     <div className = ''>
                     <ul className="w-full">
                      <Link href = '#' className="inline-block text-sm w-full p-3 hover:bg-gray-50">Account settings</Link>
                        <p
                          className="cursor-pointer inline-block text-sm w-full p-3 hover:bg-gray-50"
                          onClick={() => signOut("google")}
                          value = {'logout'}
                        >
                          Logout  
                        </p>
                    </ul>
                     </div>
                  </div>
                </div>
              </button>
            </div>
          ) : (
            <p className="overflow-hidden ml-2 bg-gray-900 text-gray-50 p-2 rounded-full cursor-pointer dark:text-gray-50">
              <User size={20} onClick={() => signIn("google")} />
            </p>
          )}
        </div>
      </div>
      {/* Links */}
      <Navbar />
    </header>
  );
};

export default Header;
