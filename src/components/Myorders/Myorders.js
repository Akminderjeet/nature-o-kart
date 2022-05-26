import React, { useEffect, useState } from "react";
import axios from "axios";
import './styles.css'
import Order from './Order'
import { CircularProgress } from "@material-ui/core";
function Myorders() {
    const [orderData, setorderData] = useState([]);

    const url = 'http://localhost:5000/orders/myorders';

    useEffect(async () => {
        await axios.get(url, {
            withCredentials: true
        }).then((response) => {

            console.log(JSON.stringify(response));

            setorderData(response.data);

        })
    }, []);









    return !orderData.length ? <CircularProgress /> : (
        <div className="product-grid-order">
            <div className="order-border">
                <div className="order-each">Status</div>
                <div className="order-each">Quantity</div>
                <div className="order-each">        Category</div>
                <div className="order-each">Bill </div>


            </div>
            {
                orderData.map((post) => (
                    <Order post={post} />
                ))
            }

        </div>

    )



}

export default Myorders;