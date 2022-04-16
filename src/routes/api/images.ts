import express from 'express';

const images = express.Router();

images.get('/images', (req, res) => {
  res.send('images is working!');
});

export default images;



