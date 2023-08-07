"use client";
import React from "react";

const Button = ({text}) => {
  return (
    <button className="w-full rounded-md bg-gray-900 px-5 py-2 text-indigo-50 font-medium text-xs sm:text-sm md:text-md lg:text-lg">
      {text}
    </button>
  );
};

export default Button;
