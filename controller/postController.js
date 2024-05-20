let posts = [
    {id: 1, title: "my first post"},
    {id: 2, title: "my second post"},
    {id: 3, title: "my third post"},
    {id: 4, title: "my fourth post"},
    {id: 5, title: "my fifth post"},
    {id: 6, title: "my sixth post"},
];


// Get all Posts route: /api/posts
export const getPosts = (req, res, next) => {
    const limit = parseInt(req.query.limit);

    if(!isNaN(limit) && limit > 0){
        return res.status(200).json(posts.slice(0, limit));
    }
        
    res.status(200).json(posts);
    
}

//Get single Post GET route: /api/posts/:id
export const getPost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id );

    if (!post) {
        const error = new Error(`A post with the id of ${id} does not exist`);
        error.status = 404;
        return next(error);
    } 
}

//Create a post  POST route: /api/posts/
export const createPost = (req, res, next) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    }

    if(!newPost.title){
        // return res.status(400).json({msg: 'Please include a title'});
        const error = new Error(`Please include a title!`);
        error.status = 400;
        return next(error);
    }

    posts.push(newPost);
    res.status(201).json(posts);
}

//Update a post  PUT route: /api/posts/:id
export const updatePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post){
        // return res.status(404).json({ msg: `No post for the id ${id}`});
        const error = new Error(`No post for the ${id} `);
        error.status = 404;
        return next(error);
    }

    post.title = req.body.title;
    res.status(200).json(posts);
}

//Delete a post  DELETE route: /api/posts/:id
export const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post){
        // return res.status(404).json({ msg: `No post for the id ${id}`});
        const error = new Error(`No post for the ${id} `);
        error.status = 404;
        return next(error);
    }

    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
}