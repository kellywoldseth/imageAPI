//create "images" route
import express from 'express';
import sharp from 'sharp';
import resizePic from '../../utils/imageResize';

import { promises as fs } from 'fs'; //is this correct/needed?
const images = express.Router();

images.get('/', (req, res) => {
  //this is correctly getting the query parameters
  const inputName: string = req.query.filename as string;
  const width: number = parseInt(req.query.width as unknown as string);
  const height: number = parseInt(req.query.height as unknown as string);

  const picresized: Promise<sharp.OutputInfo | undefined> = resizePic(inputName, width, height);
  //I think I need to use html to make the picture show up... look into this
  const htmlCode = '<img src = picresized>';
  res.send(htmlCode);
});

export default images;
