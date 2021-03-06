import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { getPosts } from './actions/posts'
import memories from './images/logo3.gif';
import Posts from "./components/Posts/Posts.js"
import Form from "./components/Form/Form.js"
import useStyles from "./styles.js"
import Orders from "./components/Orders/Orderbtn";
function Sellerhome() {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(getPosts());
        console.log("sdfsdf");

    }, [dispatch]);
    return <div>
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit" className={classes.appBar}>
                < Typography className={classes.heading} variant="h2" align="center">Nature-o-Cart</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={2}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                            <Orders />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    </div>
}
export default Sellerhome;