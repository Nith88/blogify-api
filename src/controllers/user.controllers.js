
const { validationResult } = require('express-validator');

const getSingleUser = (req, res) => {
// Express puts all URL parameters into the `req.params` object.
// The property name matches the parameter name from our route definition.
const requestedUserId = req.params.userId;

// Now we have the ID! We can use it to fetch the user from a database.
// For now, let's just send it back to confirm we got it.
res.status(200).json({
  message: `You requested data for User ID: ${requestedUserId}`
});
};


const registerUser = (req, res) => {
  // 2. Run the validation check
  const errors = validationResult(req);
  
  // 3. If there are errors, send a 400 Bad Request response
  if (!errors.isEmpty()) {
    // 400 Bad Request is the correct status code for a client-side validation error
    return res.status(400).json({ errors: errors.array() });
  }

  // If we reach this point, the data is valid!
  // We can now proceed with creating the user.
  const { email, password } = req.body;
  
  // ... logic to save user to database ...

  res.status(201).json({ message: 'User registered successfully' });
};


module.exports = {
getSingleUser,
registerUser
};