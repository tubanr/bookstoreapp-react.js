import React, { useEffect, useState } from "react";
import axios from "axios";
import { getUserInfo } from "../../utils/Auth";
import "./orderTracking.styles.css";
import Navbar from "../../components/layouts/navbar/Navbar";
import OrderTabs from "../../components/layouts/Order-table/OrderTabs";
import PendingOrders from "../../components/layouts/Order-table/Tabs/PendingOrders";
import ProcessingOrders from "../../components/layouts/Order-table/Tabs/ProcessingOrders";
import ShippedOrders from "../../components/layouts/Order-table/Tabs/ShippedOrders";

const OrderTracking = () => {
  //State to hold the orders and selected status
  const [orders, setOrders] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("pending");

  // useEffect to fetch orders
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        //get user information from the Auth.js
        const userInfo = getUserInfo();

        //send  GET request to fetch orders from the server
        const response = await axios.get("http://127.0.0.1:8001/orders", {
          headers: {
            Authorization: `Bearer ${userInfo.access_token}`,
          },
        });

        //Set orders state with the data recevied from server
        setOrders(response.data); 
      } catch (error) {
        console.error("error fetching orders", error);
      }
    };
    //Call the fetchOrders function to get orders from the server
    fetchOrders();
  }, []);

  const filterOrderByStatus = (orderStatus) => {
    if (orderStatus === "all") {
      setSelectedStatus("all");
    } else {
      setSelectedStatus(orderStatus);
    }
  };
  //filter the orders based on the selected status
  const filteredOrders = orders.filter(
    (order) => selectedStatus === "all" || order.order_status === selectedStatus
  );

  return (
    <section className="order-section-container">
      <Navbar darkTheme={true} />
      <div>
        <h2>Order Details</h2>
        <OrderTabs
          selectedStatus={selectedStatus}
          onTabClick={filterOrderByStatus}
        />
        {selectedStatus === "pending" && (
          <PendingOrders setOrders={setOrders} orders={filteredOrders} />
        )}

        {selectedStatus === "processing" && (
          <ProcessingOrders setOrders={setOrders} orders={filteredOrders} />
        )}

        {selectedStatus === "shipped" && (
          <ShippedOrders setOrders={setOrders} orders={filteredOrders} />
        )}
      </div>
    </section>
  );
};

export default OrderTracking;














// const filterOrderByStatus = (orderStatus) =>{
//   if (orderStatus ==="all"){
//     setOrders(orders);
//   } else {
//     const filteredOrders = orders.filter(
//       (order) => order.order_status === orderStatus
//     );
//     setOrders(filteredOrders);
//   }
//   setSelectedStatus(orderStatus);
// };
