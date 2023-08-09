"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/basketSlice";

const Button = ({text, product}) => {
  const dispach = useDispatch()

  const addProduct = (prod) => {
    dispach(addItem(prod))
  }

  return (
    <button 
      onClick={() => addProduct(product)}
      className="w-full rounded-md bg-gray-900 px-5 py-2 text-indigo-50 font-medium text-xs sm:text-sm md:text-md lg:text-lg">
      {text}
    </button>
  );
};

export default Button;
