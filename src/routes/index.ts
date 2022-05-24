//create router

import express from 'express';
import images from './api/images';
import path from 'path';

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response): void => {
  res.sendFile(path.resolve('src', 'routes', 'index.html'));
});

routes.use('/images', images);

export default routes;
