import React from "react";
import OrderTable from "../OrderTable";

const ShippedOrders = ({orders}) =>{
    return(
        <div>
            <h3>Shipped Orders </h3>
            <OrderTable orders={orders}/>


        </div>
        
    )
}

export default ShippedOrders;