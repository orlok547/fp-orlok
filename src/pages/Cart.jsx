import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { getProductbyId } from "../services";

export const Cart = () => {
    const {count} = useContext(CartContext)

    const {cartItems} = useContext(CartContext)

    // const idsList = count.map((item) => item.id);

	/* let tempArray = [];
	const [cartItems, setCartItems] = useState([]);

	useEffect(()=>{
		idsList.forEach(id => {
			getProductbyId(id)
			.then((res)=>{
				// cartItems.push(res);
				// debugger
				tempArray.push(res.data);
				setCartItems([...cartItems, tempArray]);
			})
			.catch((error)=>{
				console.error(`error: `, error);
			});
		});
	}, []) */

	// debugger

    // return count.length === 0 ? (<h1>no hay productos en el carrito</h1>) : <ItemListContainer productsData={cartItems} />
    return cartItems.length === 0 ? (<h1>no hay productos en el carrito</h1>) : <ItemListContainer productsData={cartItems} />
};