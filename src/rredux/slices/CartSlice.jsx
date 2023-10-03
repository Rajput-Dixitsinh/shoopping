import {createSlice} from "@reduxjs/toolkit"

 const CartSlice = createSlice({
    name: "Cart",
    initialState : [],
    reducers : {
        addItems : (state , action)=>{
          state.push(action.payload);
        },
         removeItems : (state , action)=>{
            return state.filter((items)=> items.id !== action.payload)

        },

    }
});

 export const {addItems , removeItems} = CartSlice.actions;
 export default CartSlice.reducer;
