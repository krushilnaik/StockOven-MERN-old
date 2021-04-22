const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

require('dotenv').config();

// set up passport
passport.use(
	new GoogleStrategy({
		clientID: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOOGLE_CLIENT_SECRET,
		callbackURL: "/auth/google/redirect"
	}, (_accessToken, _refreshToken, profile, _done) => {
		console.log(profile);
	})
);
