

export default (posts = [], action) => {
    console.log("entered");
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'DELETE':
            return posts.filter((post) => post.fruit === action.payload);
        default:
            return posts;
    }
}