"use client";
import React, { useEffect, useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Search } from "lucide-react";
import SearchProduct from "./SearchProduct";

const SearchButton = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = React.useState('')

  useEffect(() => {
    const getProducts = async () => {
      const api = await fetch(`https://fakestoreapi.com/products/`);
      const products = await api.json();
      setProducts(products);
    };

    getProducts();
  }, []);
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Search />
        </DialogTrigger>
        <DialogContent className = {`${query == '' ? 'h-fit' : 'max-h-96 overflow-y-scroll'}`}>
          <DialogHeader className='bg-white sticky top-0'>
            <div className='flex flex-row items-center gap-4 border-b pb-3'>
              <Search size={18} />
              <input className="w-full focus:outline-none" placeholder = 'Type to here search..' type="text" value = {query} onChange = {(e) => setQuery(e.target.value)}/>
            </div>
          </DialogHeader>
          {query != '' && products?.map((item) => (
            (item.title.includes(query)) ?
            (<div key={item?.id}>
              <SearchProduct query={item} />
            </div>): null
          
          ))}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SearchButton;
