import React, { useEffect, useState } from "react";
import axios from "axios";
import './styles.css'
function Order({ post }) {




    function handle() {
        const url = 'http://localhost:5000/orders/dispatched';
        console.log("sdfsa");
        const order = { seller: post.seller, category: post.fruitt, address: post.address, stat: 2, total: post.total, count: post.count, id: post._id };

        axios.post(url, order);

    }



    return (
        <div className="order-border">
            <div className="order-each"> {post.address}</div>
            <div className="order-each">            {post.count}</div>
            <div className="order-each">            {post.category}</div>
            <div className="order-each">            {post.total}</div>
            <div className="order-each">  <button className="order-btn" onClick={handle}>Dispatch</button></div>

        </div>
    )




}

export default Order;