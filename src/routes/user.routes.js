// src/routes/users.routes.js

const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
// Controller import (FIXED)
const userController = require('../controllers/user.controllers.js');
// 2. Define your validation rules as an array
const registrationRules = [
  // email must be a valid email
  body('email').isEmail().withMessage('Please provide a valid email address'),
  
  // password must be at least 5 chars long
  body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
];

// Routes
router.post('/register', registrationRules, userController.registerUser);
// GET single user by ID
router.get('/:userId', userController.getSingleUser);

module.exports = router;