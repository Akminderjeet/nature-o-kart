import React, { useEffect, useState } from 'react';


import { deletePost, getPosts } from '../actions/posts.js';
// import Post from './Post/Post.js';
// import useStyles from './styles';
import { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './assets/css/style.css'
import './assets/css/styleprefix.css'
const Header = () => {
    const [result, setresult] = useState('');

    // const classNamees = useStyles();
    const dispatch = useDispatch();

    function handle() {
        // const fruitt = document.getElementById('searchfield');
        dispatch(deletePost(result));
    }

    return (<>
        <header>

            <div className="header-main">

                <div className="container">
                    <Link to="/" > <img src="../../images/car1.jpg" alt="nature-o-cart" width="120" height="36">
                    </img></Link>


                    <div className="header-search-container">

                        <input type="search" name="search" value={result} onChange={(e) => setresult(e.target.value)} className="search-field" id="search-fruit" placeholder="Enter your product name..." />

                        <button className="search-btn" onClick={handle}>
                            <ion-icon name="search-outline" ></ion-icon>
                        </button>

                    </div>



                </div>

            </div>





        </header>


    </>);

};

export default Header;