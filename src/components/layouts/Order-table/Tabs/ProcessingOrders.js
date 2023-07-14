import React from "react";
import OrderTable from "../OrderTable";

const ProcessingOrders = ({orders}) =>{
    return(
        <div>
            <h3>Processing orders</h3>
            <OrderTable orders={orders}/>


        </div>
        
    )
}

export default ProcessingOrders;