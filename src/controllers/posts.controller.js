// src/controllers/posts.controller.js

// In-memory data store
let posts = [
  { id: 1, title: 'Controller Post 1' },
  { id: 2, title: 'Controller Post 2' }
];

// GET /api/v1/posts
const getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      posts
    },
    error: null
  });
};

// GET /api/v1/posts/:postId
const getPostById = (req, res, next) => {
  const postId = parseInt(req.params.postId);

  const post = posts.find(p => p.id === postId);

  if (!post) {
    const error = new Error(`Post with ID ${postId} not found`);
    error.statusCode = 404;
    return next(error);
  }

  res.status(200).json({
    success: true,
    data: {
      post
    },
    error: null
  });
};

// POST /api/v1/posts
const createPost = (req, res, next) => {
  const { title } = req.body;

  if (!title) {
    const error = new Error('Title is required');
    error.statusCode = 400;
    return next(error);
  }

  const newPost = {
    id: posts.length + 1,
    title
  };

  posts.push(newPost);

  res.status(201).json({
    success: true,
    data: {
      post: newPost
    },
    error: null
  });
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost
};