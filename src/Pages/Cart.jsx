import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItems from "../components/CartItems";

const Cart = () => {
  const {Cart} = useSelector((state) => state);
  const [totalAmount , settotalAmount] = useState(0);
  console.log(totalAmount);

  useEffect(()=>{
    settotalAmount(Cart.reduce((acc,curr)=> acc+=curr.price,0))
  },[Cart])
 

  return (
    <div>
      {Cart.length > 0 ? (
        <div  className="flex md:flex-row flex-col gap-6 max-w-6xl mx-auto justify-between">
          <div>
            {Cart.map((items, index) => (
              <CartItems key={items.id} items={items} itemIndex={index} />
            ))}
          </div>

          <div className="flex md:w-[70%] w-full flex-col justify-between items-start py-20 mx-5">
          <div className="flex flex-col items-start">
            <p className="text-green-800 text-xl font-semibold">Your Cart</p>
            <h2 className="text-green-700 text-5xl font-semibold">SUMMARY</h2>
            <p className="text-slate-700 mt-5 text-xl font-semibold">Total Items : {Cart.length}</p>
          </div>
          <div className="w-full">
            <p className="text-gray-600 text-xl font-semibold">Total amount 
            <span className="text-gray-900"> :${totalAmount}</span></p>
            <button className="text-white font-semibold px-10 py-3 text-xl bg-green-700 border-2 border-green-700 hover:bg-white hover:text-green-700 w-[95%] mx-auto transition-colors duration-300 rounded-lg mt-4">Checkout Now</button>
          </div>
        </div>
        </div>
      ) : (
        <div className="h-[80vh] flex flex-col gap-5 justify-center items-center">
          <div className="text-slate-700 font-semibold text-xl">Cart Is Empty</div>
          <NavLink to="/">
            <button className="text-white font-semibold px-10 py-3 text-base bg-green-600 border-2 border-green-600 hover:bg-white hover:text-green-600 transition-colors duration-300 rounded-lg">Shop Now</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
