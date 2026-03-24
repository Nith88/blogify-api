const express = require('express');
const router = express.Router();

// 1. Import the controller
const postController = require('../controllers/posts.controller.js');


// 2. Use the controller function as the route handler
// The router's job is now just to connect the path '/' to the 'getAllPosts' function.
router.get('/', postController.getAllPosts);
router.get('/:postId', postController.getPostById);

// ✅ POST route
router.post('/', postController.createPost);

// We can remove the old inline function entirely!
// router.get('/', (req, res) => { ... }); // This is now gone

// Export the router
module.exports = router;