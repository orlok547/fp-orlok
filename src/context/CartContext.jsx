import { createContext, useState } from "react";

export const CartContext = createContext ();

export const CartProvider = ({children}) => {
    const [count, setCount] = useState ([]);

	const [cartItems, setCartItems] = useState([]);

    return (
        <CartContext.Provider value={{count, setCount, cartItems, setCartItems}}>
            {children}
        </CartContext.Provider>
    );
};