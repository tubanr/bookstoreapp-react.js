import React from "react";
import OrderTable from "../OrderTable";

const ProcessingOrders = ({orders , setOrders}) =>{
    return(
        <div>
            <h3>Processing orders</h3>
            <OrderTable orders={orders} setOrders= {setOrders}/>


        </div>
        
    )
}

export default ProcessingOrders;