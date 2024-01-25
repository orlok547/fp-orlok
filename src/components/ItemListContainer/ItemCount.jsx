import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { getProductbyId } from "../../services";

const ItemCount = ({productId}) => {
    const [countItem, setCountItem] = useState(1);

    const {count, setCount} = useContext(CartContext);

    const {cartItems, setCartItems} = useContext(CartContext);

    const handleAdd = () => {
        setCountItem( countItem + 1);
    };
    
    const handleRemove = () => {
        setCountItem( countItem - 1);
    };

    const handleAddProductToCart = () => {
        const productExist = count.find((item) => item.id === productId);

        if (productExist) {
            setCount (
                count.map((item) =>
                    item.id === productId
                    ? {...item, quantity: item.quantity + countItem}
                    : item
                )
            );
        } else {
            getProductbyId(productId)
			.then((res)=>{
				setCartItems([...cartItems, res.data]);
                setCount ([...count, {id: productId, quantity: countItem}]);
			})
			.catch((error)=>{
				console.error(`error: `, error);
			});
        }
        setCountItem(1);
    };

    return (
        <div>
            <div style={{
                width: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "auto",
            }}
            >
                <button onClick={handleRemove}>-</button>
                <span>{countItem}</span>
                <button onClick={handleAdd}>+</button>
            </div>
            <button onClick={handleAddProductToCart}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;