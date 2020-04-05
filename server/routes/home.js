require('dotenv').config();

const express = require('express');
const router = express.Router();


// Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, id) => {
    if (err) return res.sendStatus(401);
    req.id = id;
    next();
  });
}

// Routes
router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/isAuth', authenticateToken, (req, res) => {
  res.send('Hello World!');
});


module.exports = router;
