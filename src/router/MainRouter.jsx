import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Category from "../pages/Category";
import {ItemDetailContainer} from "../pages/ItemDetailContainer";
import NavBarComponent from '../components/NavBarComponent/NavBarComponent'
import { Cart } from "../pages/Cart";

const MainRouter = () => {
    return (
        <BrowserRouter>
        <NavBarComponent />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/category/:id" element={<Category />}/>
                <Route path="/item/:id" element={<ItemDetailContainer />}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter;