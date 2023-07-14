import React from "react";
import './orderTabs.styles.css';

const OrderTabs = ({ selectedStatus, onTabClick }) => {


  return (
    <div className="order-tabs">

      <button
        className={selectedStatus === "pending" ? "active" : ""}
        onClick={() => onTabClick("pending")}
      >
        Pending
      </button>

      <button
        className={selectedStatus === "processing" ? "active" : ""}
        onClick={() => onTabClick("processing")}
      >
        Processing
      </button>

      <button
        className={selectedStatus === "shipped" ? "active" : ""}
        onClick={() => onTabClick("shipped")}
      >
        Shipped
      </button>

      <div>
        
      </div>
     
    </div>
  );
};

export default OrderTabs;