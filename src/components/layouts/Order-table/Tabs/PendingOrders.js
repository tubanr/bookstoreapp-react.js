import React from "react";
import OrderTable from "../OrderTable";

const PendingOrders = ({orders}) =>{
    return(
        <div>
            <h3>Pending orders</h3>
            <OrderTable orders={orders}/>
        </div>
        

    )
}

export default PendingOrders;