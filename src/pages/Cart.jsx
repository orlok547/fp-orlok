import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { getProductbyId } from "../services";

export const Cart = () => {
    const {cartItems} = useContext(CartContext)

    return cartItems.length === 0 ? (<h1>no hay productos en el carrito</h1>) : <ItemListContainer productsData={cartItems} />
};