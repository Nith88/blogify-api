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
const getPostById = async (req, res, next) => {
  try {
    // 1. Get the ID from the URL parameters.
    const postId = req.params.postId;

    // 2. Use the Post model's findById() method.
    const post = await Post.findById(postId);

    // 3. CRITICAL: Check if the post was found.
    if (!post) {
      // If post is null, it means no document with that ID was found.
      // Send a 404 Not Found response and stop execution.
      return res.status(404).json({
        success: false,
        error: { message: `Post with ID ${postId} not found` }
      });
    }

    // 4. If the post was found, send a 200 OK response with the document.
    res.status(200).json({
      success: true,
      data: post
    });

  } catch (error) {
    // This will catch other errors, like an invalid ID format.
    next(error);
  }
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