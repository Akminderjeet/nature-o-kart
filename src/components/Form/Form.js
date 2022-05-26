import React, { useState, useEffect } from "react";
import FileBase from 'react-file-base64'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import useStyles from './styles';
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts.js";


const Form = ({ currentId, setCurrentId }) => {
    const [postData, setpostData] = useState({
        fruit: '', title: '', price: '', selectedFile: ''
    });

    const postee = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (postee) setpostData(postee);
    }, [postee]);

    const clear = () => {
        console.log("sfsfdfs");
        setCurrentId(null);
        setpostData({ fruit: '', title: '', price: '', selectedFile: '' });

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData));

        } else {
            dispatch(createPost(postData));

        }
        console.log("api called");
    }


    return <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={'${classes.root} ${classes.form}'} onSubmit={handleSubmit} method="post">
            <Typography variant="h6" className="head">Adding a Product</Typography>
            {/* <TextField name="creator" variant="outlined" label="Company" fullWidth value={postData.creator} onChange={(e) => setpostData({ ...postData, creator: e.target.value })}></TextField> */}
            <TextField name="fruit" variant="outlined" label="fruit" fullWidth value={postData.fruit} onChange={(e) => setpostData({ ...postData, fruit: e.target.value })}></TextField>
            <TextField name="title" variant="outlined" label="title" fullWidth value={postData.title} onChange={(e) => setpostData({ ...postData, title: e.target.value })}></TextField>
            <TextField name="price" variant="outlined" label="price" fullWidth value={postData.price} onChange={(e) => setpostData({ ...postData, price: e.target.value })}></TextField>
            <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setpostData({ ...postData, selectedFile: base64 })} /></div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="Submit" fullWidth>
                Submit
            </Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
                Clear
            </Button>
        </form>

    </Paper>



}
export default Form;