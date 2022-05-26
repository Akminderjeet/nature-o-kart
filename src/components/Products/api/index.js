import axios from "axios";

const url = 'http://localhost:5000/posts/all';
const url2 = 'http://localhost:5000/check';

export const fetchPosts = () => axios.get(url, {
    withCredentials: true
});

