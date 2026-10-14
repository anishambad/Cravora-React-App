import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/CartSlice'

const FoodCard = ({id,name,desc,img,rating,price}) => {

  const dispatch = useDispatch()
  return (
    <div className='font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2'>
      <img src={img} alt="" className='w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out'/>
      <div className='flex justify-between text-sm'>
        <h2>{name}</h2>
        <span className='text-green-400'>₹{price}</span>
      </div>

      <p className='mt-2 font-normal text-sm'>{desc.slice(0,50)}..</p>

      <div className='flex justify-between mt-2'>
        <h3><span><i className="ri-star-fill text-sm text-yellow-300"></i></span> {rating}</h3>
        <button onClick={()=>{dispatch(addToCart({id , name , price , rating , img ,qty : 1 }))}} className='px-3 py-1 bg-green-400 text-white rounded-xl'>Add to cart</button>
      </div>
      
          
    </div>
  )
}

export default FoodCard
