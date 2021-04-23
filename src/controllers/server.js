const express = require('express');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
// const cookieSession = require('cookie-session');

const authRoutes = require('./routes/auth.routes');
require('../config/passport.config');

// set up express
const app = express();
const PORT = process.env.SERVER_PORT || 3000;

// load environment variables
require('dotenv').config();

// define middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../../public')));
// app.use(cookieSession({ name: 'stockoven', keys: ['key1', 'key2'] }));
app.use(passport.initialize());
app.use(passport.session());

// set up RESTful API
app.use('/auth', authRoutes);

// start server
app.listen(PORT, () => console.log(`Running server on port ${PORT}`));
