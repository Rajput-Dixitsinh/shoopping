import React from "react";
import { BsCartFill } from "react-icons/bs";
import Logo from "../assests/logo.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

  const {Cart} = useSelector((state)=>state)
  return (
    <nav className="font-medium text-white flex justify-between mx-auto items-center h-20 max-w-6xl px-8">
      <NavLink to="/">
        <img src={Logo} alt="logo" className="md:h-14 h-10" />
      </NavLink>

      <div className="flex justify-between items-center gap-6">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>

        <NavLink to="/cart">
          <div className="flex relative">
            <BsCartFill size="30" />
            {
              Cart.length > 0 && 
              (<div className="flex justify-center items-center absolute rounded-full bg-green-600 w-5 h-5 top-0 -right-2">
              <span>{Cart.length}</span>
            </div>)
            }
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
