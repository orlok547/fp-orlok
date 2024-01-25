import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Cart = () => {
    const {count} = useContext (CartContext)

    const idsList = count.map ((item) => item.id);

    return count.length === 0 ? (<h1>no hay productos en el carrito</h1>) :null
};