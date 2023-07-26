import React from "react";
import OrderTable from "../OrderTable";

const PendingOrders = ({orders,setOrders}) =>{
    return(
        <div>
            <h3>Pending orders</h3>
            <OrderTable orders={orders} setOrders= {setOrders}/>
        </div>
        

    )
}

export default PendingOrders;