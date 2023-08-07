'use client'
import Button from "@/app/components/Button";
import { Check, MoveLeft, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

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
  const route = useRouter()
  return (
    <section className='dark:bg-slate-950 px-5 py-3 w-full'>
        <div className="flex items-center h-[22rem] md:h-[30rem] gap-8 md:gap-36 max-w-5xl m-auto">
            <div className="flex flex-col justify-between w-1/2 h-full">
                <div className="space-y-3">
                    <MoveLeft className = 'text-gray-500 cursor-pointer' onClick = {() => route.back()}/>
                    <p className="text-sm text-gray-500">{product?.category}</p>
                    <h1 className="font-bold sm:text-xl md:text-3xl">{product?.title}</h1>
                    <div className="text-xs md:text-base flex items-center gap-3">
                        <p>${product.price}</p>
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
                    <Button text={'Add to cart'} />
                    <Link href = '' className="text-xs md:text-base flex items-center gap-5 text-gray-600 hover:text-gray-800"><ShieldCheck /> Lifetime Guarantee</Link>
                </div>
            </div>
            <div className="w-56 h-56 md:w-80 md:h-80">
                <img src={product?.image} className="w-full h-full object-fill" alt={product.title} />
            </div>
        </div>
    </section>
  );
};

export default Products;
