const jwt = require('jsonwebtoken');
const secert = "my-super-secret-key-21647134443213215";

const authenticateUser = (req, res, next) => {
  // Get the token from cookies or headers
  const cookies = req.headers.cookie;
        // Extract token from cookies
  const tokenCookie = cookies.split(';').find(cookie => cookie.trim().startsWith('token='));
//   const token = req.cookies.token || req.headers.authorization.split(' ')[1];
  if (!tokenCookie) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    // Verify the token
    const token = tokenCookie.split('=')[1];
    const decoded = jwt.verify(token,secert,{});

    req.user = decoded; // Set request.user with user information
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = { authenticateUser };
