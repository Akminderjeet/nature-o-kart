import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import './assets/css/style.css'
import './assets/css/styleprefix.css'
import { deletePost } from '../actions/posts';



const Product = ({ post, setpostData, settotal, setcount }) => {

  // const dispatch = useDispatch();
  // function dletee(id) {
  //   console.log('sdfdfs');

  // }
  function handle() {
    setcount(0);
    settotal(0);
    setpostData({ fruitt: post.fruit, titlee: post.title, pricee: post.price, selectedFilee: post.selectedFile });
  }

  return (<div class="showcase">

    <div class="showcase-banner">

      <img src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} width="300"
        class="product-img default" />

    </div>

    <div class="showcase-content" onClick={() => {
      setpostData({ fruitt: post.fruit, titlee: post.title, pricee: post.price, selectedFilee: post.selectedFile, seller: post.email })
      settotal(0)
      setcount(0)
    }}>

      <a href="#" class="showcase-category">{post.fruit}</a>

      <a href="#">
        <h3 class="showcase-title">{post.title}</h3>
      </a>



      <div class="price-box">
        <p class="price">{post.price}</p>

      </div>

    </div>

  </div >)
}
export default Product;