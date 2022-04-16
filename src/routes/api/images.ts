//create "images" route
import express from 'express';

const images = express.Router();

images.get('/', (req, res) => {
  res.send('images is working!');
});

export default images;
