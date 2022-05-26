import React, { useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { deletePost, getPosts } from './actions/posts.js';
// import Post from './Post/Post.js';
// import useStyles from './styles';
import { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header.js'
import Selected from './components/Selected.js'
import Products from './components/Products.js'
function Data() {

    // const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(getPosts());


    }, [dispatch]);

    return (<>
        <Header ></Header>
        <Selected></Selected>



        {/* {!posts.length ? <CircularProgress /> : (

        // <Grid container alignItems="stretch" spacing={3}>
        //     <button onClick={handle}>sdfgfdg</button>
        //     {
        //         posts.map((post) => (<>
        //             <br></br>
        //             <br></br>
        //             <br></br>
        //             <h1>thais</h1>
        //             <div>{post.email}</div>

        //         </>
        //         ))
        //     }
        // </Grid>
    )
        } */}
    </>);

};

export default Data;