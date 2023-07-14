import React from "react";
import Navbar from "../../components/layouts/navbar/Navbar";
import CartItemsContainer from "../../components/layouts/cart-items-container/CartItemsContainer";



const CartPage = () =>{
    return(
        <section>
            <Navbar darkTheme={true}/>
            <CartItemsContainer />
           

        </section>
    )


}

export default CartPage;