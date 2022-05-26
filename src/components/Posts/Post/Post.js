import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    function dletee(id) {
        console.log('sdfdfs');

    }

    return (<Card className={classes.card}>
        <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
        <div className={classes.overlay}>
            <Typography variant="h6">{post.fruit}</Typography>

        </div>
        <div className={classes.overlay2}>
            <Button style={{ color: 'white' }} size="small" onClick={() => {

            }} >
                <MoreHorizIcon fontSize="medium" onClick={() => setCurrentId(post._id)} />
            </Button>

        </div>
        <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="h2"></Typography>
        </div>
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">{post.title}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
            <Button size="small" color="primary" >{post.price}</Button>
            <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))} ><DeleteIcon fontSize="small" /> Delete</Button>
        </CardActions>

    </Card>)
}
export default Post;