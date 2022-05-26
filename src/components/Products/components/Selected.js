import React, { useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { deletePost, getPosts } from '../actions/posts.js';
// import Post from './Post/Post.js';
// import useStyles from './styles';
import { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import './assets/css/style.css'
import './assets/css/styleprefix.css';
import { useState } from 'react';
import Products from './Products.js';
import Address from './Address.js';

import axios from 'axios';
const Selected = () => {


    // const posts = useSelector((state) => state.posts);
    const [postData, setpostData] = useState({
        fruitt: '', titlee: '', pricee: '', selectedFilee: '', seller: ''
    });

    const [count, setcount] = useState(0);
    const [total, settotal] = useState(0);
    const [address, setaddress] = useState('');
    const [addr, setaddr] = useState(0);


    function increment() {
        setcount(count + 1)
        const money = postData.pricee;
        settotal(total + money);
    }
    function decrement() {
        setcount(count - 1);
        const money = postData.pricee;
        settotal(total - money);
    }
    // const classes = useStyles();
    const dispatch = useDispatch();

    function handle() {
        if (address === '') {
            setaddr(1);
        }
        if (total > 0) {
            const order = { seller: postData.seller, category: postData.fruitt, address: address, stat: 1, total: total, count: count };
            const url = 'http://localhost:5000/orders';

            setaddr(0);
            axios.post(url, order, {
                withCredentials: true
            });
            alert("data sent");
        }

    }

    return (<>

        {(addr === 0) ? <div></div> : <Address addr={addr} setaddr={setaddr} address={address} setaddress={setaddress} />}


        <div class="product-featured">



            <div class="showcase-wrapper has-scrollbar">

                <div class="showcase-container">

                    <div class="showcase">

                        <div class="showcase-banner">
                            <img src={postData.selectedFilee || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt="shampoo, conditioner & facewash packs"
                                class="showcase-img" />
                        </div>

                        <div class="showcase-content">



                            <a href="#">
                                <h3 class="showcase-title">{postData.fruitt}</h3>
                            </a>

                            <p class="showcase-desc">
                                {postData.titlee}
                            </p>

                            <div class="price-box">
                                <p class="price">{postData.pricee}</p>
                                <del><i class="fa-solid fa-indian-rupee-sign"></i>{56.00}</del>

                            </div>


                            <div class="showcase-status">
                                <button onClick={increment}>increment</button>Count :{count}<button onClick={decrement}>decrease</button>
                            </div>
                            <button class="add-cart-btn">Amount:  {total}</button>
                            <button class="add-cart-btn" onClick={handle}>Click to Order</button>
                            <div class="showcase-status">
                                <div class="wrapper">
                                    <p>
                                        already sold: <b>20</b>
                                    </p>

                                    <p>
                                        available: <b>40</b>
                                    </p>
                                </div>

                                <div class="showcase-status-bar"></div>
                            </div>

                        </div>

                    </div>

                </div>



            </div>

        </div>

        <Products count={count} total={total} postData={postData} setpostData={setpostData} settotal={settotal} setcount={setcount} />
    </>);

};

export default Selected;