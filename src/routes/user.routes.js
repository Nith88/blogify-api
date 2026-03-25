// src/routes/users.routes.js

const express = require('express');
const router = express.Router();

// Controller import (FIXED)
const userController = require('../controllers/user.controllers.js');

// Routes

// GET single user by ID
router.get('/:userId', userController.getSingleUser);

module.exports = router;