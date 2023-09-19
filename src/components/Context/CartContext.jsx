import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const addProduct = (newProduct)=>{
        setCartList([
            ...cartList,
            newProduct
        ])
    }

    const deleteCart = ()=>{
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addProduct,
            deleteCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
