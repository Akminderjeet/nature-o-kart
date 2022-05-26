
import * as api from '../api/index.js';

// Actions Creators
export const getPosts = () => async (dispatch) => {
    try {
        console.log("initialized");
        const { data } = await api.fetchPosts();
        console.log(data);
        dispatch({ type: 'FETCH_ALL', payload: data });
    }
    catch (error) {
        console.log(error.message);
    }


    //   const action = { type: 'FETCH_ALL', payload: [] };

    // dispatch(action);
}

export const deletePost = (id) => async (dispatch) => {
    try {
        console.log(id);
        dispatch({ type: 'DELETE', payload: id });

    } catch (error) {
        console.log(error.message);
    }
};


