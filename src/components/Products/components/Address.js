import React, { useEffect, useState } from 'react';


import { deletePost, getPosts } from '../actions/posts.js';
// import Post from './Post/Post.js';
// import useStyles from './styles';
import { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import './assets/css/Address.css'
import './assets/css/style.css'
import './assets/css/styleprefix.css'
import { TextareaAutosize } from '@material-ui/core';
const Address = ({ addr, setaddr, address, setaddress }) => {
    function handle() {

        setaddr(0);
        console.log(addr);

    }


    return (
        <div className='outer'>
            <h1>Enter Address</h1>
            <textarea className='inner' value={address} onChange={(e) => { setaddress(e.target.value) }}></textarea>
            <button onClick={handle}>Done</button>
        </div>
    )



};

export default Address;