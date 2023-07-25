import React from "react";
import OrderTable from "../OrderTable";

const ShippedOrders = ({orders, setOrders}) =>{
    return(
        <div>
            <h3>Shipped Orders </h3>
            <OrderTable orders={orders} setOrders= {setOrders}/>


        </div>
        
    )
}

export default ShippedOrders;