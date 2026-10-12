import React from 'react'
import {IoMdClose} from 'react-icons/io';
import ItemCard from './ItemCard';
const Cart = () => {
  return (
    <>
    <div className='fixed right-0 top-0 lg:w-[20vw] w-full h-full p-5 bg-white mb-3'>
        <div className='flex justify-between items-center my-3'>
            <span className='text-xl font-bold text-gray-800 '>My Order</span>
            <IoMdClose className='border-2 border-gray-600 text-gray-600 font-extrabold p-1 text-xl rounded-full hover:text-red-800 hover:border-red-800 cursor-pointer'/>
        </div>

        <ItemCard/>

        <div className='absolute bottom-0 '>
            <h3 className='font-semibold text-gray-800'>Items : </h3>
            <h2 className='font-semibold text-gray-800'>Total Amount : </h2>
            <hr className='w-[90vw] lg:w-[18vw] my-2'/>
            <button className='bg-green-500 font-bolf px-3 text-white py-2 rounded-lg lg:w-[18vw] w-[90vw] mb-5'>CheckOut</button>
        </div>
    </div>
    </>
  )
}

export default Cart