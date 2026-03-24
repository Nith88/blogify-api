// src/controllers/posts.controller.js

// In-memory data store (shared across functions)
let posts = [
  { id: 1, title: 'Controller Post 1' },
  { id: 2, title: 'Controller Post 2' }
];

// GET /api/v1/posts
const getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      posts: posts
    }
  });
};

// GET /api/v1/posts/:postId
const getPostById = (req, res) => {
  try {
    const postId = parseInt(req.params.postId);

    const post = posts.find(p => p.id === postId);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: `Post with ID ${postId} not found`
      });
    }

    res.status(200).json({
      success: true,
      data: {
        post: post
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching post',
      error: error.message
    });
  }
};

// POST /api/v1/posts
const createPost = (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: 'Title is required'
      });
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
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating post',
      error: error.message
    });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost
};