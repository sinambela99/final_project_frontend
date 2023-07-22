import { configureStore } from "@reduxjs/toolkit";
import cartSlice, { getTotal } from "@/redux/features/cartSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
    }
})

store.dispatch(getTotal())

export default store