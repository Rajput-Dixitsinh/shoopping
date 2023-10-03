

import React from 'react'
import {AiFillDelete} from "react-icons/ai"
import { removeItems } from '../rredux/slices/CartSlice'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'



const CartItems = ({items , itemIndex}) => {
   const dispatch = useDispatch();
    const removeItemsFromStore = () =>{
        dispatch(removeItems(items.id));
        toast.error('Remove Items!');
   }



   const {image,title,description,price} = items;

   
  return (
   <div>
       <div className="flex md:flex-row flex-col gap-10 mx-auto border-b-2 md:w-[90%] md:justify-between justify-center items-center border-slate-500 p-10">
        <div className=" w-[27%]">
           
            <img className=" object-cover" src={image} alt="" />
        </div>
        <div className="flex flex-col md:w-[65%] w-[90%] gap-5">
            <h1 className="text-gray-700 font-semibold text-xl w-[90%]">{title}</h1>
            <p className="text-gray-600">{description.split(" ").slice(0,10).join(" ") + "..."}</p>
        </div>
        <div className="flex gap-5 justify-between items-center pr-5 py-2">
           
            <p className="text-green-600 text-lg font-bold">{price}</p>
            <button className="text-red-700 bg-red-300 h-8 w-8 rounded-full" onClick={removeItemsFromStore}>
                <AiFillDelete size="20px" className="m-auto"/>
            </button>
        </div>
       </div>
   </div>
  )
}

export default CartItems