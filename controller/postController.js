
// Get all Posts route: /api/posts
const getPosts = (req, res, next) => {
    const limit = parseInt(req.query.limit);

    if(!isNaN(limit) && limit > 0){
        return res.status(200).json(posts.slice(0, limit));
    }
        
    res.status(200).json(posts);
    
}

//Get single Post route: /api/posts/:id
const getPost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id );

    if (!post) {
        const error = new Error(`A post with the id of ${id} does not exist`);
        error.status = 404;
        return next(error);
    } 
}