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
  const [orders, setOrders] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("pending");

  useEffect(() => {
    const fetchOrders = async () => {   
      try {
        const userInfo = getUserInfo();
        const response = await axios.get("http://127.0.0.1:8001/orders", {
          headers: {
            Authorization: `Bearer ${userInfo.access_token}`,
          },
        });
        setOrders(response.data);
      } catch (error) {
        console.error("error fetching orders", error);
      }
    };
    fetchOrders();
  }, []);

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
          <PendingOrders orders={filteredOrders} />
        )}

        {selectedStatus === "processing" && (
          <ProcessingOrders orders={filteredOrders} />
        )}

        {selectedStatus === "shipped" && (
          <ShippedOrders orders={filteredOrders} />
        )}
      </div>
    </section>
  );
};

export default OrderTracking;
