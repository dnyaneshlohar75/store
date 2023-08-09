'use client'
import Button from "@/app/components/Button";
import { Check, ShieldCheck } from "lucide-react";
import Link from "next/link";
import React from "react";
import Currency from 'currency-formatter'

const Products = ({params}) => {
  const [product, setProduct] = React.useState({})
  React.useEffect(() => {
    const getData = async () => {
      const api = await fetch(`https://fakestoreapi.com/products/${params.id}`);
      const response = await api.json();
      setProduct(response)
    };

    getData()
  }, []);
  return (
    <section className='dark:bg-slate-950 px-5 py-3 w-full'>
        <div className="flex flex-col sm:flex-row items-center h-[22rem] md:h-[30rem] gap-8 md:gap-36 max-w-5xl m-auto">
            <div className="w-full sm:w-56 h-56 md:w-80 md:h-80">
                <img src={product?.image} className="w-full h-full object-contain" alt={product.title} />
            </div>
            <div className="flex flex-col justify-between sm:w-1/2 h-full">
                <div className="space-y-3">
                    <p className="text-sm text-gray-500">{product?.category}</p>
                    <h1 className="font-bold sm:text-xl md:text-3xl">{product?.title}</h1>
                    <div className="text-xs md:text-base flex items-center gap-3">
                        <p>{Currency.format(product.price, {code: 'INR'})}</p>
                        <div className="w-[2px] bg-gray-400 h-5" />
                        <p>{product?.rating?.rate} rating</p>
                        <p>{product?.rating?.count} reviews</p>
                    </div>
                    <p className="text-xs md:text-base text-gray-600 line-clamp-4">{product.description}</p>
                    <div className="flex items-center gap-3 my-8 text-xs md:text-base">
                        <Check className="text-green-400" size = {20}/> <p>In stock and ready to ship.</p>
                    </div>
                </div>
                <div className="space-y-3 flex flex-col items-center ">
                    <Button text={'Add to cart'} product={product}/>
                    <Link href = '' className="text-xs md:text-base flex items-center gap-5 text-gray-600 hover:text-gray-800"><ShieldCheck /> Lifetime Guarantee</Link>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Products;
