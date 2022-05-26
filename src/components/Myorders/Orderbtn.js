import React, { useState, useEffect } from "react";
import FileBase from 'react-file-base64'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import './styles.css'
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts.js";


const Orderbtn = ({ currentId, setCurrentId }) => {



    return <button className="order-btn">Orders</button>





}
export default Orderbtn;