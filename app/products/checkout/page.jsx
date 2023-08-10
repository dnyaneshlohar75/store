"use client";
import React from "react";
import CheckoutItem from "@/app/components/landing/CheckoutItem";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "@/redux/basketSlice";
import Currency from 'currency-formatter'
import { signIn, useSession } from "next-auth/react";

const Checkout = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { status } = useSession()
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-7 md:gap-16 px-5 py-3 w-full">
        <div className="col-span-5">
          {items.length == 0 ? (
            <div>
              <h1 className="text-2xl font-semibold">Your basket is empty.</h1>
            </div>
          ) : (
            <div>
              <h1 className="text-2xl font-semibold pb-3">Your Cart</h1>
              <div className="">
                {items.map((item) => (
                  <CheckoutItem key={item.id} product={item} />
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="w-full md:col-span-2">
          <h1 className="text-xl font-semibold pb-3">Order summary</h1>
          <div className="space-y-2 py-3">
            <h1 className="flex items-center justify-between">
              <p>items: </p>
              <p>{Currency.format(total, {code: 'INR'})}</p>
            </h1>
            <h1 className="flex items-center justify-between">
              <p>delivery: </p>
              <p>{Currency.format(0, {code: 'INR'})}</p>
            </h1>
          </div>
          <hr />
          <h1 className="font-semibold text-xl text-red-700 my-3">
            <div className=" flex items-center justify-between">
              <p className="">Order Total: </p>
              <p>{Currency.format((total + (total * 1.8) / 100), { code: 'INR'})}</p>
            </div>
            <span className="text-gray-500 text-xs font-normal">
              (orders totals include GST)
            </span>
          </h1>
          {status === 'authenticated' ?
          <button 
          className="mt-8 w-full px-5 py-2 bg-gray-900 text-white rounded-sm outline-offset-1 outline-stone-800 focus:outline">
            Order now
          </button>
          :
            <button 
            onClick={() => signIn('google')}
            className="mt-8 w-full px-5 py-2 bg-gray-900 text-white rounded-sm outline-offset-1 outline-stone-800 focus:outline">
              Sign in to checkout
            </button>
            }
        </div>
      </div>
    </>
  );
};

export default Checkout;
