//create router

import express from 'express';
import images from './api/images';
import path from 'path';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

routes.use('/images', images);

export default routes;
