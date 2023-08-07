"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
