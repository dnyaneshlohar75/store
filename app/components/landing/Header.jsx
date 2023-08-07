'use client'
import { Heart, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import Navbar from './Navbar';
import ThemeButton from '../ThemeButton';
import SearchButton from './SearchButton';

const Header = () => {
  return (
    <header className='dark:bg-slate-950 px-5 py-3 w-full'>
        <div className='flex items-center justify-between py-3'>
            {/* Logo */}
            <div>
                <h1 className='font-bold uppercase tracking-widest text-2xl'>store</h1>
            </div>
            <div className='flex items-center gap-5'>
                <SearchButton />
                <Link href = '/wishlist'>
                  <Heart />
                </Link>
                <Link href = '/checkout' className='relative cursor-pointer text-gray-950 dark:text-gray-50'>
                  <span className='absolute -top-2 -right-2 text-xs bg-gray-700 py-[2px] px-[6px] text-white rounded-full'>0</span>
                  <ShoppingCart />
                </Link>
                <ThemeButton />
            </div>
        </div>
        {/* Links */}
        <Navbar />
    </header>
  )
}

export default Header;