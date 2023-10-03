import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItems, removeItems } from '../rredux/slices/CartSlice';
import toast from "react-hot-toast"
import {TbCurrencyRupee} from 'react-icons/tb'

const Products = ({post}) => {

     const dispatch = useDispatch();
     const addItemsToStore = () =>{
          dispatch(addItems(post));
          toast.success('Add Items!');
     }
     const removeItemsFromStore = () =>{
        dispatch(removeItems(post.id));
        toast.error('Remove Items!');
   }

     const {Cart} = useSelector((state)=>state)
     const {title,description,image,price } = post;
  return (
    <div className=' flex flex-col gap-y-3 p-3 justify-between items-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition-all duration-300 ease-in hover:scale-110 rounded-xl hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
        <div className='text-gray-700 font-semibold text-lg'>
            <p>{title.substring(0,14) + "..."}</p>
        </div>
        <div className="text-[10px] text-gray-400 w-40">
            <p>{description.split(" ").slice(0,10).join(" ") + "..."}</p>
        </div>
        <div className="h-[180px]">
            <img  className="w-full h-full" src={image} alt="" />
        </div>
        <div className="flex text-lg gap-12 mt-3 justify-between items-center">
         
            <p className="text-green-600 font-semibold">{"Rs : "}{price}</p>
        </div>
        {Cart.some((p) => p.id === post.id) ? (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
            onClick={removeItemsFromStore}>
            Remove Item
          </button>
        ) : (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
            onClick={addItemsToStore}>
            Add to Cart
          </button>
        )}
    </div>
  )
}

export default Products