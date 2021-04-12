import express from 'express';
import cors from 'cors';
import path from 'path';

import apiRoutes from './routes/api.routes';

// set up express
const app = express();
const PORT = process.env.PORT || 3000;

// define middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../../public')));

// set up routing
app.use('/api', apiRoutes);

// start server
app.listen(process.env.PORT || 3000, () => console.log(`Running server on port ${PORT}`));
