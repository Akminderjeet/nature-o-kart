import axios from "axios";

const url = 'http://localhost:5000/posts';
const url2 = 'http://localhost:5000/check';

export const fetchPosts = () => axios.get(url, {
    withCredentials: true
});
export const createPost = (newPost) => axios.post(url, newPost, {
    withCredentials: true
});
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);