
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import './assets/css/style.css'
import './assets/css/styleprefix.css'
import Product from './Product.js'

const Products = ({ setpostData, settotal, setcount }) => {
    const posts = useSelector((state) => state.posts);
    // useEffect(() => {
    //     // console.log(setpostData)
    //     // setpostData({ fruitt: 'banana', titlee: 'asdfasdf', pricee: 'asdasdf', selectedFilee: 'asdfasf' });
    // })

    return !posts.length ? <h1>NO DATA</h1> : (
        <div class="product-main">
            <div class="product-grid">
                {
                    posts.map((post) => (
                        <Product post={post} setpostData={setpostData} settotal={settotal} setcount={setcount} />
                    ))
                }
            </div>
        </div>
    )


    // <div class="product-main">
    //     <div class="product-grid">



    //     </div>
    // </div>

}
export default Products;