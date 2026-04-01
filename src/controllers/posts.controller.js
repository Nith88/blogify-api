// src/controllers/posts.controller.js

const Post = require('../models/post.model.js');


// GET /api/v1/posts
const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();

    res.status(200).json({
      success: true,
      data: {
        posts
      },
      error: null
    });
  } catch (error) {
    next(error);
  }
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
const createPost = async (req, res, next) => {
  try {
    // The data for the new post comes from the client in the request body.
    const postData = req.body;

    // We use the Mongoose Model's create() method to create and save the document.
    // We 'await' the result because it's an asynchronous operation.
    const newPost = await Post.create(postData);

    // If creation is successful, send a 201 Created response with the new post data.
    res.status(201).json({
      success: true,
      data: newPost
    });
  } catch (error) {
    // If validation fails or any other error occurs, pass it to our error handler.
    next(error);
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost
};