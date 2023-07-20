// Create web server using express.js
var express = require('express');
var router = express.Router();

// Create route for /comments
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('comments', { title: 'Comments' });
});

// Export router
module.exports = router;