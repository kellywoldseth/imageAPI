//create "images" route
import express from 'express';
import sharp from 'sharp';
import resizePic from '../../utils/imageResize';
import path from 'path';

import { promises as fs } from 'fs'; //is this correct/needed?
const images = express.Router();

images.get('/', (req, res) => {
  const inputName: string = req.query.filename as string;
  const width: number = parseInt(req.query.width as unknown as string);
  const height: number = parseInt(req.query.height as unknown as string);

  const picResized: Promise<sharp.OutputInfo | undefined> = resizePic(
    inputName,
    width,
    height
  );
 
  const pathName: string = inputName +  '_thumb.jpg';
  res.sendFile(path.resolve('src','thumbs',pathName) );


});

export default images;
