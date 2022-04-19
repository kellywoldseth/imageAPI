//This file creates the '/images' endpoint

import express from 'express';
import sharp from 'sharp';
import resizePic from '../../utils/imageResize';
import path from 'path';

const images = express.Router();

images.get('/', (req, res) => {
  //parse querty parameters
  const inputName: string = req.query.filename as string;
  const width: number = parseInt(req.query.width as unknown as string);
  const height: number = parseInt(req.query.height as unknown as string);

  //call resizePic function
  const picResized: Promise<string> = resizePic(inputName, width, height);
  //display the picture on server
  const pathName: string = inputName + '_thumb.jpg';
  res.sendFile(path.resolve('src', 'thumbs', pathName));
});

export default images;
