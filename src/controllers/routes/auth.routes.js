const router = require('express').Router();

const googleRoutes = require('./auth/google.routes');
const yahooRoutes = require('./auth/yahoo.routes.js');
const redditRoutes = require('./auth/reddit.routes');

router.get('/google', googleRoutes);
router.get('/yahoo', yahooRoutes);
router.get('/reddit', redditRoutes);

module.exports = router;
