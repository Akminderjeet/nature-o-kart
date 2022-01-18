
import * as api from '../api/index.js';

// Actions Creators
export const getPosts = () => async (dispatch) => {
    try {
        console.log("initialized");
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data });
    }
    catch (error) {
        console.log(error.message);
    }


    //   const action = { type: 'FETCH_ALL', payload: [] };

    // dispatch(action);
}
export const createPost = (post) => (dispatch) => {
    try {

        const data = api.createPost(post);

        dispatch({ type: 'CREATE', payload: data });

    } catch (error) {
        console.log(error.message);
    }
}
export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};
export const deletePost = (id) => async (dispatch) => {
    try {
        console.log("done");
        await api.deletePost(id);
        console.log("done");
        dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
        console.log(error.message);
    }
};


