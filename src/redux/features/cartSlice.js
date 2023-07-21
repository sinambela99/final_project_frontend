import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: typeof window !== 'undefined' && localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Actions
        hydrate(state, action) {
            return action.payload;
        },
        // Add item to cart
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
                toast.info(`increased ${state.cartItems[itemIndex].Product.name} cart quantity`, {
                    position: 'bottom-left'
                })
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct)
                toast.success(`${action.payload.Product.name} added to cart`, {
                    position: 'bottom-left'
                })
            }

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        //Update the quantity of item in cart
        updateCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (cartItem) => cartItem.id === action.payload.id
            )

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1
                toast.info(`Decreased ${action.payload.Product.name} cart quantity`, {
                    position: 'bottom-left'
                })
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    (cartItem) => cartItem.id !== action.payload.id
                )

                state.cartItems = nextCartItems

                toast.error(`${action.payload.Product.name} remove from cart`, {
                    position: 'bottom-left'
                })
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        // Remove an item from cart
        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload.id
            )

            state.cartItems = nextCartItems

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
            toast.error(`${action.payload.Product.name} remove from cart`, {
                position: 'bottom-left'
            })
        },
        // Empty the cart
        emptyCart(state, action) {
            state.cartItems = []
            toast.error(`Cart removed`, {
                position: 'bottom-left'
            })
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        // Get All Total Price
        getTotal(state, action) {
            let { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
                const { price } = cartItem.Product
                const { cartQuantity } = cartItem
                const itemTotal = price * cartQuantity

                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity

                return cartTotal
            }, {
                total: 0,
                quantity: 0,
            })

            state.cartTotalQuantity = quantity
            state.cartTotalAmount = total
        }
    }
})

export const { hydrate, addToCart, updateCart, removeFromCart, emptyCart, getTotal } = cartSlice.actions

export default cartSlice.reducer