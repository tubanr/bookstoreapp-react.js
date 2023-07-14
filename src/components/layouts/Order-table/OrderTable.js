import React, { useEffect, useState } from "react";
import { useTable } from "react-table";
import "./orderTable.styles.css";
import axios from "axios";
import { getUserInfo } from "../../../utils/Auth";


const OrderTable = ({ orders, setOrders }) => {
  

  const data = React.useMemo(() => orders, [orders]);


  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const userInfo = getUserInfo();
      const access_token = userInfo.access_token;
      //Make API request to update the order status
      const response = await axios.put(
        `/orders/${orderId}`,
        { order_status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${userInfo.access_token}`,
          },
        }
      );
      //update order status
      const updatedOrders = orders.map((order) => {
        if (order.id === orderId) {
          return { ...order, order_status: newStatus };
        }
        return order;
      });

      //set the updated data in the component state
      setOrders(updatedOrders);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = React.useMemo(
    () => [
      { Header: "Order id", accessor: "id" },
      { Header: "User id", accessor: "user_id" },
      { Header: "Orderline", accessor: "order_lines",Cell:({ cell}) =>{
        return (
          <ul>
            {cell.value.map((order_lines) =>(
              <li>
                Book Id:{order_lines.book_id}, Quantity: {order_lines.quantity}
              </li>
            ))}
          </ul>
        );
      },
     },
      {
        Header: "order status",
        accessor: "order_status",
        Cell: ({ row }) => (
          <select
            value={row.values.order_status}
            onChange={(e) =>
              handleStatusChange(row.original.id, e.target.value)
            }
          >
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
          </select>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}> {column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}> {cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default OrderTable;
