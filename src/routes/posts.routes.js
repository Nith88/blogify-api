// src/routes/posts.routes.js

const express = require('express');
const router = express.Router();

// Controller import
const postController = require('../controllers/posts.controller.js');

// Routes

// GET all posts
router.get('/', postController.getAllPosts);

// GET single post by ID
router.get('/:postId', postController.getPostById);

// CREATE new post
router.post('/', postController.createPost);

module.exports = router;