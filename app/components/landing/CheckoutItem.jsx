'use client'
import React from 'react'
import Currency from 'currency-formatter'

const CheckoutItem = ({product}) => {
  return (
    <div className='grid grid-cols-4 gap-5 even:border-b even:border-t p-5'>
        <div className = 'w-full h-36'>
            <img className='w-full h-full object-contain' src={product.image} alt="" />
        </div>
        <div className='col-span-2 space-y-2'>
            <h1 className = 'font-semibold sm:text-lg md:text-xl'>{product.title}</h1>
            <p className='text-gray-400 text-xs sm:text-sm line-clamp-3'>{product.description}</p>
            <p>rating: {product.rating.rate} | reviews: {product.rating.count}</p>
        </div>
        <div className='w-full flex items-center justify-center flex-col m-auto'>
            <h1 className = 'font-semibold text-lg md:text-2xl'>{Currency.format(product.price, {
                code: 'INR',
            })}</h1>
            <button className='px-5 py-2 my-3 rounded-sm'>
                Remove
            </button>
        </div>
    </div>
  )
}

export default CheckoutItem;