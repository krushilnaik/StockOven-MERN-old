const express = require('express');
const cors = require('cors');
const path = require('path');

const apiRoutes = require('./routes/api.routes');

// set up express
const app = express();
const PORT = process.env.PORT || 3000;

// load environment variables
require('dotenv').config();

// define middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../../public')));

// set up RESTful API
app.use('/api', apiRoutes);

// start server
app.listen(process.env.PORT || 3000, () => console.log(`Running server on port ${PORT}`));
