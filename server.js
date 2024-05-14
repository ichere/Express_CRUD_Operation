const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;

const app = express();

// static setup
// app.use(express.static(path.join(__dirname, 'public')));

// static server using app.get
// app.get('/index', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

let posts = [
    {id: 1, title: "my first post"},
    {id: 2, title: "my second post"},
    {id: 3, title: "my third post"},
    {id: 4, title: "my fourth post"},
    {id: 5, title: "my fifth post"},
    {id: 6, title: "my sixth post"},
];

//Get all posts
app.get('/api/posts', (req, res) => {
    const limit = parseInt(req.query.limit);
    res.json(posts);
});

//Get all posts
app.get('/api/posts', (req, res) => {
    res.json(posts);
});

//Get one posts
app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.json(posts.filter((post) => post.id === id));
});

app.listen(port, () => console.log(`Server is running on port ${port}`));