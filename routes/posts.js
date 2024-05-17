import express from 'express';
const router = express.Router();

let posts = [
    {id: 1, title: "my first post"},
    {id: 2, title: "my second post"},
    {id: 3, title: "my third post"},
    {id: 4, title: "my fourth post"},
    {id: 5, title: "my fifth post"},
    {id: 6, title: "my sixth post"},
];

// static setup
// app.use(express.static(path.join(__dirname, 'public')));

// static server using app.get
// app.get('/index', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

//Get all posts with limit
router.get('/', (req, res) => {
    const limit = parseInt(req.query.limit);

    if(!isNaN(limit) && limit > 0){
        return res.status(200).json(posts.slice(0, limit));
    }
        
    res.status(200).json(posts);
    
});

//Get all posts
router.get('/', (req, res) => {
    res.json(posts);
});

//Get one post and return error message for 404
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id );

    if (!post) {
        res.status(404).json({msg: `A post with the id of ${id} does not exist`});
    } else {
        res.status(200).json(post);
    }
});

//Get one posts
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.json(posts.filter((post) => post.id === id));
});

//Create new post
router.post('/', (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    }

    if(!newPost.title){
        return res.status(400).json({msg: 'Please include a title'});
    }

    posts.push(newPost);
    res.status(201).json(posts);
});

//Update Post
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post){
        return res.status(404).json({ msg: `No post for the id ${id}`});
    }

    post.title = req.body.title;
    res.status(200).json(posts);
});

//Delete Post
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post){
        return res.status(404).json({ msg: `No post for the id ${id}`});
    }

    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
});

// module.exports = router; for common.js
export default router;