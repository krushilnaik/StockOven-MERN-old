const router = require('express').Router();
const passport = require('passport');

// google auth
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/redirect', passport.authenticate('google', { failureRedirect: '/sign_in' }), (_req, res) => {
	res.send('Successfully logged in with Google');
});

// reddit auth
router.get('/reddit', passport.authenticate('reddit'));

router.get('/reddit/redirect', passport.authenticate('reddit', { failureRedirect: '/sign_in' }), (_req, res) => {
	res.send('Successfully logged in with Reddit');
});

module.exports = router;
