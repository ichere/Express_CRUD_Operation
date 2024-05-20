import express from 'express';
const router = express.Router();
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controller/postController.js';


// static setup
// app.use(express.static(path.join(__dirname, 'public')));

// static server using app.get
// app.get('/index', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

//Get all posts with limit
router.get('/', getPosts);

//Get all posts
router.get('/', (req, res, next) => {
    res.json(posts);
});

//Get one post and return error message for 404
// router.get('/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const post = posts.find((post) => post.id === id );

//     if (!post) {
//         res.status(404).json({msg: `A post with the id of ${id} does not exist`});
//     } else {
//         res.status(200).json(post);
//     }
// });

// New Error handling for single post
router.get('/:id', getPost);


//Get one posts
router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    res.json(posts.filter((post) => post.id === id));
});

//Create new post
router.post('/', createPost);

//Update Post
router.put('/:id', updatePost);

//Delete Post
router.delete('/:id', deletePost);

// module.exports = router; for common.js
export default router;