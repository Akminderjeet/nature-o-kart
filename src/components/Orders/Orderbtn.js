import React, { useState, useEffect } from "react";
import FileBase from 'react-file-base64'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import './styles.css'
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts.js";
import { Link } from "react-router-dom";

const Orderbtn = ({ currentId, setCurrentId }) => {



    return <Link to="/request" class="order-btn">Orders</Link>





}
export default Orderbtn;