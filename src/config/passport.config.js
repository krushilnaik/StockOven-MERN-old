var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var RedditStrategy = require('passport-reddit').Strategy;

require('dotenv').config();

// set up passport
passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: 'http://localhost:3000/auth/google/redirect'
		},
		(_accessToken, _refreshToken, profile, done) => {
			done(profile);
			// User.findOrCreate({ googleId: profile.id }, function (err, user) {
			// 	return done(err, user);
			// });
		}
	)
);

// passport.use(
// 	new RedditStrategy(
// 		{
// 			clientID: process.env.REDDIT_CONSUMER_KEY,
// 			clientSecret: process.env.REDDIT_CONSUMER_SECRET,
// 			callbackURL: 'http://localhost:3000/auth/reddit/redirect'
// 		},
// 		(_accessToken, _refreshToken, profile, done) => {
// 			done(profile);
// 			// User.findOrCreate({ redditId: profile.id }, function (err, user) {
// 			// 	return done(err, user);
// 			// });
// 		}
// 	)
// );
