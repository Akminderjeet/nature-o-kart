import React, { useEffect, useState } from "react";
import axios from "axios";
import './styles.css'
function Order({ post }) {








    return (
        <div className="order-border">
            <div className="order-each">{post.stat === 1 ? <div>Pending</div> : <div>Dispatched</div>}</div>
            <div className="order-each">            {post.count}</div>
            <div className="order-each">            {post.category}</div>
            <div className="order-each">            {post.total}</div>


        </div>
    )




}

export default Order;