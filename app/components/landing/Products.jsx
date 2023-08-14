"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Image from "next/image";
import wideBanner from '../../../public/banner_6.JPG'
import squareBanner from '../../../public/banner_7.JPG'

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const api = await fetch("https://fakestoreapi.com/products/");
      const products = await api.json();
      setProducts(products);
    };
    getProducts();
  }, []);

  return (
    <section className="w-full px-5 py-3">
      <h1 className="font-medium text-xl py-3">All Products</h1>
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {products?.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
          <div className="col-span-2 w-full h-full overflow-hidden">
            <Image
              src={squareBanner}
              width={1200}
              height={1200}
              style={{maxWidth: '100%', height: '100%', objectFit: 'cover'}}
              alt="banner-7"
              className="h-full w-full object-cover"
            />
          </div>
          {products.slice(8, 14).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div>
          <Image
            src={wideBanner}
            width={1200}
            height={128}
            style={{maxWidth: '100%', height: 'auto'}}
            objectFit="cover"
            alt=""
            className="h-full w-full"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {products?.slice(4, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

