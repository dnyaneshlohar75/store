"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "../components/landing/ProductCard";

const Electronics = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const api = await fetch("https://fakestoreapi.com/products/category/electronics");
      const products = await api.json();
      setProducts(products);
    };

    getProducts();
  }, []);

  return (
    <section className="w-full px-5 py-3">
      <h1 className="font-medium text-xl py-3">Electronics</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Electronics;