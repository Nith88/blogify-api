const express = require('express');
const router = express.Router();

const postRouter = require('./posts.routes.js');
const userRouter = require('./user.routes.js');

// Delegate to resource routers
router.use('/posts', postRouter);
router.use('/users', userRouter);

module.exports = router;