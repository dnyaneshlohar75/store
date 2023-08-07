import React, { useEffect, useState } from 'react'

const SearchProduct = ({query}) => {
  return (
    <div className='grid grid-cols-4 gap-3 bg-white'>
        <div>
            <img src={query.image} className='w-full h-full p-3' alt="image" />
        </div>
        <div className='col-span-3'>
            <h1 className='font-semibold'>{query.title}</h1>
            <p className='text-xs text-gray-400 line-clamp-3'>{query.description}</p>
            <h1 className='font-semibold mt-3'>${query.price}</h1>
        </div>
        <div>

        </div>
    </div>
  )
}

export default SearchProduct;