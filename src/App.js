import React from "react";
import Navbar from "./components/Navbar";
import { Outlet, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./rredux/Store";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="flex flex-col gap-14">
      <div className='bg-slate-900 px-3 w-screen'>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <div className='bg-slate-900 px-3 w-screen '>
        <Footer/>
      </div>
    </div>
  );
};

export default App;

// export const createRouter = createBrowserRouter([
//   {
//       path : "/",
//       element : <App />,
//       children : [
//           {
//           path :"/",
//           element : <Home/>
//           },
//           {
//               path :"/Cart",
//               element : <Cart/>
//            },

//       ]
//   }
// ])
