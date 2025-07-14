import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";


const Orders = () => {


  const [allOrders, setallOrders]= useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3000/allOrders",{withCredentials: true,})
    .then((res)=>{
      setallOrders(res.data);
    }).catch((err) => {
      console.error("Error fetching orders:", err);

    });

  }, []);

  return (
    <>
      <h3 className="title">All Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Qty.</th>
            <th>Mode</th>
            <th>P&L</th>
            
            
          </tr>

          {allOrders.map((Orders, index) => {
            const curValue = Orders.price * Orders.qty;
            const isProfit = curValue - (Orders.price) * (Orders.qty) >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = Orders.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                
                <td>{Orders.name}</td>
                <td>{Orders.price}</td>
                <td>{Orders.qty}</td>
                <td>{Orders.mode}</td>
                <td className={profClass}>
                  {(curValue - Orders.price * Orders.qty).toFixed(2)}
                </td>
                
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};




export default Orders;
