import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";





const store = configureStore({
     reducer : {
        Cart:CartSlice,
        
     }
})

export default store;